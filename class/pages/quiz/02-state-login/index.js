import { useState } from 'react'
import {
    Wrapper, Haeder,HaederIconBox,
    HaederIcon, MainBox, Footer,
    LogoBox, LogoImg, LogoText, 
    EmailPwBox,TextBox, TextEmailBox, TextEmail, EmailError, TextIcon, TextLine,
    TextPasswordBox, TextPassword, PwError,
    ButtonLogin, FindBox, FindAnd, FindEmail, FindPw, FindJoin,
    ButtonCacao, CacaoImg, Cacao
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

        if(pw === "" || pw.length < 8 && pw.length >= 16) {
            setPwError("8~16자의 영문,숫자,특수문자만 사용가능합니다.")
        }
    }

    return (
        <Wrapper>
            {/* 맨 위 아이콘 */}
            <Haeder>
                <HaederIconBox>
                    <HaederIcon>와파</HaederIcon>
                    <HaederIcon>상태</HaederIcon>
                    <HaederIcon>배터리</HaederIcon>
                    <HaederIcon>시계</HaederIcon>
                </HaederIconBox>
            </Haeder>
            {/* 아래 전체 */}
            <MainBox>
                <LogoBox>
                    <LogoImg><img src="/images/위치모양.svg" /></LogoImg>
                    <LogoText>잇츠로드</LogoText>
                </LogoBox>
                <EmailPwBox>
                    <TextBox>
                        <TextEmailBox>
                            <TextEmail type="text" placeholder="이메일" onChange={onChangeEmail} />
                            <TextIcon />
                        </TextEmailBox>
                        <TextLine />
                        <EmailError>{emailError}</EmailError>
                    </TextBox>
                    <TextBox>
                        <TextPasswordBox>
                            <TextPassword type="password" placeholder="패스워드" onChange={onChangePw} />
                            <TextIcon />
                        </TextPasswordBox>
                        <TextLine />
                        <PwError>{pwError}</PwError>
                    </TextBox>
                </EmailPwBox>
                <Footer>
                <ButtonLogin onClick={onClickSignup} >로그인</ButtonLogin>
                <FindBox>
                    <FindEmail>이메일 찾기</FindEmail>
                    <FindAnd>|</FindAnd>
                    <FindPw>비밀번호 찾기</FindPw>
                    <FindAnd>|</FindAnd>
                    <FindJoin>회원가입</FindJoin>
                </FindBox>
                <ButtonCacao>
                    <CacaoImg />
                    <Cacao>카카오톡으로 로그인</Cacao>
                </ButtonCacao>
                </Footer>
            </MainBox>
        </Wrapper>
    )
}