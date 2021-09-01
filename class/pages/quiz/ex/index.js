import { useState } from "react";

export default function HiPage(){

    // 안녕하세요 -> 반갑습니다로 버튼 클릭시 변경되는 이벤트
    const [text,setText] = useState("안녕하세요")

    function onClickChange(){
        setText("반갑습니다")
    }

    // 버튼 클릭시 카운트 증가 이벤트
    const [count, setCount] = useState(0)

    function onClickCount(){
        setCount(count + 1)
    }

    // 인증번호 클릭시 인증번호가 변경되는 이벤트
    const [number, setNumber] = useState("000000")
    
    function onClickNumber(){
        const count = Math.floor(Math.random()*1000000)
        setNumber(109109)
    }
    return(
        <div>
            <button onClick={onClickChange} >{text}</button>
            <div>{count}</div>
            <button onClick={onClickCount} >카운트증가</button>

            <div>{number}</div>
            <button onClick={onClickNumber} >인증번호전송</button>

        </div>
    )
}
