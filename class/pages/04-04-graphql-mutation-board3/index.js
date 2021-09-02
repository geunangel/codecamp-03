import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

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
    //mywriter=변수, setMywriter=함수, useState= state 초기값 기능가지고 있는 함수
    const [mywriter, setMywriter] = useState("")
    const [mytitle, setMytitle] = useState("")
    const [mycontents, setMycontents] = useState("")

    //setMywriter 함수를 실행할때는 ()
    function onChangeMyWriter(event){
        setMywriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMytitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMycontents(event.target.value)
    }

    async function aaa(){
        //createBoard 요청 ->  응답(백엔드컴퓨터)-> awit응답을 받을때까지 기다려줌-> 응답을 받아서 result 저장
        const result = await createBoard({
            variables: { writer: mywriter, title: mytitle, contents: mycontents }
        })
        //응답했던거 출력 result
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return (
        //부모
        <>
            {/* 자식 */}
            작성자: <input type="text" onChange={onChangeMyWriter}/><br/>
            제목: <input type="text" onChange={onChangeMyTitle}/><br/>
            내용: <input type="text" onChange={onChangeMyContents}/><br/>
            <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}