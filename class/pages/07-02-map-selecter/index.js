import { gql, useMutation, useQuery } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid gray;
`

const Column = styled.div`
    width: 20%;
`

const Table = styled.div`

`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number:$number){
                message
        }
    }
`

export default function MapSelecterPage(){
    //등록,삭제 gql을 쓰려면 useMutation
    const [deleteBoard] = useMutation(DELETE_BOARD)
    //조회할때 gql을 쓰려면 useQuery
    const {data} = useQuery(FETCH_BOARDS)

    async function onClickDelete(event){
        await deleteBoard({
            //클릭했을때 실행되게 하는 
            variables: { number: Number(event.target.id) },
            //삭제하고 바로 실행(여러개 사용가능해서 [])
            refetchQueries: [{ query: FETCH_BOARDS }]
        })
    }

    //첫번쨰 방법
    //data.fetchBoards // [{},{},{}] 이런식으로 출력

    return(
        <Table>
            {/* 두번째 방법 +맵 */}
            {data?.fetchBoards.map((el, index) => (
                <Row key={el.number}>
                    <Column>
                        <input type="checkbox" />
                    </Column>
                    <Column>{index}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Column>
                </Row>
            ))}
        </Table>
    )
}