import { useState } from 'react'
import styled from '@emotion/styled'

const EmailText = styled.div`
    color:red;
`
export default function SignipStatePage(){

    function onClickSignup(){
        
        let email = document.getElementById("email")
        let password1 = document.getElementById("password1")
        let password2 = document.getElementById("password2")
        if(.includes("@")){
            setEmailError("@가 없습니다!")
            // alert("@가 없습니다!")
        }

        if(password1 !== password2){
            // alert("비밀번호가 서로 다릅니다!")
            setPasswordError("비밀번호가 서로 다릅니다!")
        }
    }

    return (
        <div>
            이메일: <input type="text" id="email" /><br/>
            <EmailText>{emailError}</EmailText>{/* emotion으로 색과 사이즈 변경하기 */}
            비밀번호: <input type="password" id="password1" /><br/>
            비밀번호 확인: <input type="password" id="password2" /><br/>
            <div>{passwordError}</div>
            <button onClick={onClickSignup}>회원가입하기</button>
        </div>
    )
}