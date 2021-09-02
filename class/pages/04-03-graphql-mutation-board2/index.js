import { useMutation, gql } from '@apollo/client'

//세팅완료
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer:$writer, title: $title, contents:$contents){
        number
        message
        }
    }
`


export default function GraphqlMutationBoard1Page(){
    //준비(세팅)
    const [createBoard] = useMutation(CREATE_BOARD)

    async function aaa(){
        //요청 -> createBoard 응답 -> result 저장
        const result = await createBoard({
            variables: { writer: "근아", title: "제목적어라", contents: "내용적어라" }
        })
        //응답했던거 출력 result
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return (
        
        <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    )
}