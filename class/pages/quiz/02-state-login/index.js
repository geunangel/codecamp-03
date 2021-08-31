import {Wrapper, Haeder,
    HaederIcon, Footer,
    MainIconBox, IconImg, IconText, 
    TextBox, TextEmailBox, TextEmail, TextIcon, TextMailError, 
    TextPasswordBox, TextPassword,
    ButtonLogin, 
    FindBox, FindEmail, FindPassword, FindMember,
    CacaoBox, ButtonCacao
} from '../../../styles/login.styles'

export default function LoginState(){

    return (
        <Wrapper>
            <Haeder>
                <HaederIcon>와이파이</HaederIcon>
                <HaederIcon>상태</HaederIcon>
                <HaederIcon>배터리</HaederIcon>
                <HaederIcon>시계</HaederIcon>
            </Haeder>
            <Footer>
            <MainIconBox>
                <IconImg><img src="/images/위치모양.svg" /></IconImg>
                <IconText>잇츠로드</IconText>
            </MainIconBox>
            <TextBox>
                <TextEmailBox>
                    <TextEmail type="text" placeholder="이메일" />
                    <TextIcon></TextIcon>
                </TextEmailBox>
                <TextMailError type="text" />
            </TextBox>
            <TextBox>
                <TextPasswordBox>
                    <TextPassword type="password" placeholder="패스워드" />
                    <TextIcon>x</TextIcon>
                </TextPasswordBox>
                <TextMailError type="text" />
            </TextBox>
            <ButtonLogin>로그인</ButtonLogin>
            <FindBox>
                <FindEmail>이메일 찾기</FindEmail>
                <div>|</div>
                <FindPassword>비밀번호 찾기</FindPassword>
                <div>|</div>
                <FindMember>회원가입</FindMember>
            </FindBox>
            <CacaoBox>
                <img  />
                <ButtonCacao>카카오톡 로그인</ButtonCacao>
            </CacaoBox>
            </Footer>
        </Wrapper>
    )
}