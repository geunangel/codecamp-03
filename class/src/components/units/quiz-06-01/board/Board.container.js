import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CREATE_BOARD } from './Board.queries'
import { BoardUI } from './Board.presenter'


export default function DynamicBoard(){
    const router = useRouter()

    //준비(세팅)
    const [createBoard] = useMutation(CREATE_BOARD)
    //mywriter=변수, setMywriter=함수, useState= state 초기값 기능가지고 있는 함수
    const [mywriter, setMywriter] = useState("")
    const [mytitle, setMytitle] = useState("")
    const [mycontents, setMycontents] = useState("")

    const [ccc, setCcc] = useState(false)

    //setMywriter 함수를 실행할때는 ()
    function onChangeMyWriter(event){
        setMywriter(event.target.value)
        if((event.target.value) !== "" && myTitle !== "" && myContents !== ""){
            setCcc(true)
        }
    }

    function onChangeMyTitle(event){
        setMytitle(event.target.value)
        if(mywriter !== "" && (event.target.value) !== "" && myContents !== ""){
            setCcc(true)
        }
    }

    function onChangeMyContents(event){
        setMycontents(event.target.value)
        if(mywriter !== "" && myTitle !== "" && (event.target.value) !== ""){
            setCcc(true)
        }
    }

    async function aaa(){
        //네트워크 통신이라서 항상 성공이 보장되는게 아니다
        //mutation이 실패 할수도 있기 때문에 try{}catch{} 해준다
        //그걸 예외처리라고 한다!!
        try {

        //createBoard 요청 ->  응답(백엔드컴퓨터)-> awit응답을 받을때까지 기다려줌-> 응답을 받아서 result 저장
        const result = await createBoard({
            variables: { writer: mywriter, title: mytitle, contents: mycontents }
        })
        //응답했던거 출력 result
        console.log(result)
        console.log(result.data.createBoard.number)

        //이동
        router.push(`/quiz/06-02-dynamic-board-read/${result.data.createBoard.number}`) // 최식방식 (템플릿 리터럴)

        } catch(error) {
            console.log(error)
        }
    }

    return(
        <BoardUI 
            onChangeMyWriter={onChangeMyWriter}
            onChangeMyTitle={onChangeMyTitle}
            onChangeMyContents={onChangeMyContents}
            aaa={aaa}
        />
    )
}