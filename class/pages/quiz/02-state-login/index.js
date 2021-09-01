import { useState } from 'react'
import {
    Wrapper1,Wrapper, Haeder,
    HaederIcon, MainBox, Footer,
    MainIconBox, IconImg, IconText, 
    TextBox, TextEmailBox, TextEmail, TextIcon, TextError, 
    TextPasswordBox, TextPassword,
    ButtonLogin, FindBox, Find,
    CacaoBox, ButtonCacao
} from '../../../styles/login.styles'

export default function LoginState(){

    const [ email, setEmail ] = useState()
    const [ pw, setPw ] = useState()

    const [ emailError, setEmailError ] = useState()
    const [ pwError, setPwError ] = useState()


    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePw(event) {
        setPw(event.target.value)
    }

    function onClickSignup() {
        if(email === "" || !email.includes("@")) {
            setEmailError("이메일을 확인해 주세요.")
        }

        if(pw === "" || pw.length < 8) {
            setPwError("8~16자의 영문,숫자,특수문자만 사용가능합니다.")
        }
    }

    return (
        <Wrapper1>
        <Wrapper>
            <Haeder>
                <HaederIcon>와이파이</HaederIcon>
                <HaederIcon>상태</HaederIcon>
                <HaederIcon>배터리</HaederIcon>
                <HaederIcon>시계</HaederIcon>
            </Haeder>
            <MainBox>
            <MainIconBox>
                <IconImg><img src="/images/위치모양.svg" /></IconImg>
                <IconText>잇츠로드</IconText>
            </MainIconBox>
            <TextBox>
                <TextEmailBox>
                    <TextEmail type="text" placeholder="이메일" onChange={onChangeEmail} />
                    <TextIcon></TextIcon>
                </TextEmailBox>
                <TextError type="text" />{emailError}
            </TextBox>
            <TextBox>
                <TextPasswordBox>
                    <TextPassword type="password" placeholder="패스워드" onChange={onChangePw} />
                    <TextIcon>x</TextIcon>
                </TextPasswordBox>
                <TextError type="text" />{pwError}
            </TextBox>
            <Footer>
            <ButtonLogin onClick={onClickSignup} >로그인</ButtonLogin>
            <FindBox>
                <Find>이메일 찾기</Find>
                <Find>|</Find>
                <Find>비밀번호 찾기</Find>
                <Find>|</Find>
                <Find>회원가입</Find>
            </FindBox>
            <CacaoBox>
                <img src="" />
                <ButtonCacao>카카오톡 로그인</ButtonCacao>
            </CacaoBox>
            </Footer>
            </MainBox>
        </Wrapper>
        </Wrapper1>
    )
}