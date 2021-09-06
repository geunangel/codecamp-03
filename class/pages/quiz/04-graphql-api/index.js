import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"근아", title:"api-quiz", contents:"graphqlapi,restapi 둘 다 어렵!!!") {
            message
            number
        }
    }
`

export default function GraphqlApiPage(){

    const [createBoard] = useMutation(CREATE_BOARD)

    async function onClickgraphqlApi(){

        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return(

        <button onClick={onClickgraphqlApi}>GRAPHQL-API 요청하기</button>
    )
}