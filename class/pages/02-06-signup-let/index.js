import styled from '@emotion/styled'

const EmailText = styled.div`
    color:red;
`
export default function SignipStatePage(){

    function onClickSignup(){
        
        let email = document.getElementById("email")
        let password1 = document.getElementById("password1")
        let password2 = document.getElementById("password2")
        if(email.includes("@")){
            // alert("@가 없습니다!")
            document.getElementById("emailtest").innerText = "@가 없습니다!"
        }

        if(password1 !== password2){
            // alert("비밀번호가 서로 다릅니다!")
            document.getElementById("passwordtest").innerText = "비밀번호가 서로 다릅니다!"
        }
    }

    return (
        <div>
            이메일: <input type="text" id="email" /><br/>
            <EmailText EmailText id="emailtest"></EmailText>
            비밀번호: <input type="password" id="password1" /><br/>
            비밀번호 확인: <input type="password" id="password2" /><br/>
            <div id="passtest"></div>
            <button id="button" onClick={onClickSignup}>회원가입하기</button>
        </div>
    )
}