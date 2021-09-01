import styled from '@emotion/styled'
import { useState } from 'react'
import {
    Wrapper1,Wrapper, Title,
    WriterPasswordBox, WriterBox, WriterName, WriterText,
    PasswordBox, PasswordName, PasswordText,
    TitleBox, TitleName, TitleText,
    ContentsBox, ContentsName, ContentsText,
    AddressBox, AddressSearchBox, AddressSearch, AddressName, ButtonAddress, AddressText,
    YoutubeBox, YoutubeName, YoutubeText,
    ImgBox, ImgTitle, ImgUploadBox, ImgUpload, ImgText,
    MainBox, MainName, MainCheck, ButtonEnrollent
} from '../../../styles/BoardsNew.styles'

const nameError = styled.input`
    color: red;
`
export default function BoardsNewPage(){

    const [ name, setName ] = useState()
    const [ pw, setPw ] = useState()
    const [ title, setTitle ] = useState()
    const [ contents, setContents ] = useState()

    const [ nameError, setNameError ] = useState()
    const [ pwError, setPwError ] = useState()
    const [ titleError, setTitleError ] = useState()
    const [ contentsError, setContentsError ] = useState()

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangePw(event) {
        setPw(event.target.value)
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    function onChangeContents(event) {
        setContents(event.target.value)
    }

    function onClickSignup() {
        if(name == ("")) {
            setNameError("이름을 작성해 주세요.")
        }

        if(pw == ("")) {
            setPwError("비밀번호를 작성해 주세요.")
        }

        if(title == ("")) {
            setTitleError("제목을 작성해 주세요.")
        }

        if(contents == ("")) {
            setContentsError("내용을 작성해 주세요.")
        }
    }

    //return 위쪽은 Javascript 쓰는 곳
    //return 아래는 HTML 쓰는 곳
    return(
        <Wrapper1>
        <Wrapper>
            <Title>게시판 등록</Title>
            <WriterPasswordBox>
                <WriterBox>
                    <WriterName>작성자</WriterName>
                    <WriterText type="text" placeholder="이름을 입력해 주세요." onChange={onChangeName} />
                    {nameError}  
                </WriterBox>
                <PasswordBox>
                    <PasswordName>비밀번호</PasswordName>
                    <PasswordText type="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePw} />
                    {nameError}
                </PasswordBox>
            </WriterPasswordBox>
            <TitleBox>
                <TitleName>제목</TitleName>
                <TitleText type="text" placeholder="제목을 작석해 주세요." onChange={onChangeTitle} /><br/>
                {nameError}
            </TitleBox>
            <ContentsBox>
                <ContentsName>내용</ContentsName>
                <ContentsText type="text" placeholder="내용을 작성해 주세요." onChange={onChangeContents} /><br/>
                {nameError}
            </ContentsBox>
            <AddressBox>
                <AddressName>주소</AddressName>
                <AddressSearchBox>
                    <AddressSearch type="text"></AddressSearch>
                    <ButtonAddress>우편번호 검색</ButtonAddress><br/>
                </AddressSearchBox>
                <AddressText type="text" /><br/>
                <AddressText type="text" /><br/>
            </AddressBox>
            <YoutubeBox>
                <YoutubeName>유튜브</YoutubeName>
                <YoutubeText type="text" placeholder="링크를 복사해 주세요." /><br/>
            </YoutubeBox>
            <ImgBox>
                <ImgTitle>사진첨부</ImgTitle>
                <ImgUploadBox>
                    <ImgUpload>
                        <ImgText>+</ImgText>
                        <ImgText>등록하기</ImgText>
                    </ImgUpload>
                    <ImgUpload>
                        <ImgText>+</ImgText>
                        <ImgText>등록하기</ImgText>
                    </ImgUpload>
                    <ImgUpload>
                        <ImgText>+</ImgText>
                        <ImgText>등록하기</ImgText>
                    </ImgUpload>
                </ImgUploadBox>
            </ImgBox>
            <MainBox>
            <MainName>메인설정</MainName>
            <MainCheck type="radio" />유튜브
            <MainCheck type="radio" />사진
            </MainBox>
            <ButtonEnrollent onClick={onClickSignup} >등록하기</ButtonEnrollent>
        </Wrapper>
        </Wrapper1>
    )
}