import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
    # 여기는 자바스크립트 주석입니다
    mutation createBoard($writer: String, $title: String, $contents: String    ) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            number
            message
        }
    }
`
// 여기는 자바스크립트 주석입니다
export default function DynamicBoardWrite(){
    const router = useRouter()

    //IMutation 응답데이터에 타입을 지정해줌
    //Pick안에 IMutation안에 createBoard불러옴
    const [ createBoard ] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
    //타입추론되서 기본을 String으로 인식
    const [myWriter, setMyWriter] = useState<string>("")
    const [myTitle, setMyTitle] = useState<string>("")
    const [myContents, setMyContents] = useState("")

    const bbb: String = "asdf" //상수에 타입 지정하기

    //문자랑 숫자 모두 넣고 싶을때
    //const [myTitle, setMyTitle] = useState<string | number>("")
    //setMyTitle(123123) 

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    }

    async function aaa(){
        try {

            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents }
            })
            result.data.createBoard.number
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) // 옛날방식
            router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) // 최신방식(템플릿 리터럴)
        } catch(error){
            console.log(error)
        }
        
    }

    return (
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br />
            제목: <input type="text" onChange={onChangeMyTitle} /><br />
            내용: <input type="text" onChange={onChangeMyContents} /><br />
            {/* <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button> */}
        </>
    )
}