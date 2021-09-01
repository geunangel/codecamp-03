import { useState } from "react"

export default function SignupStatePage() {

    const[ num, setNum ] = useState("000000")

    function number () {
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        setNum(token)
    }

    return(
        <div>
            <div>{num}</div>
            <button onClick={number}>인증번호전송</button>
        </div>
    )

}