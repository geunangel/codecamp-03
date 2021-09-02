import { useMutation, gql } from '@apollo/client'


const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"영희", title:"안녕하세요! 영희입니다.", contents:"내용"){
        number
        message
        }
    }
`


export default function GraphqlMutationBoard1Page(){
    //준비(세팅)
    const [createBoard] = useMutation(CREATE_BOARD)

    async function aaa(){
        //요청 -> createBoard <-응답
        const result = await createBoard()
        //응답했던거 출력 result
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return (
        <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    )
}