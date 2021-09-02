import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'
import {
    Wrapper, Title,
    WriterPasswordBox, WriterBox, WriterName, WriterText,
    PasswordBox, PasswordName, PasswordText,
    TitleBox, TitleName, TitleText,
    ContentsBox, ContentsName, ContentsText,
    AddressBox, AddressSearchBox, AddressSearch, AddressName, ButtonAddress, AddressText,
    YoutubeBox, YoutubeName, YoutubeText,
    ImgBox, ImgTitle, ImgUploadBox, ImgUpload, ImgText,
    MainBox, MainName, MainCheck, ButtonEnrollent, Error
} from '../../../styles/BoardsNew.styles'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput) {
            _id
        }
    }
`

export default function BoardsNewPage(){

    const [createBoard ] = useMutation(CREATE_BOARD)

    const [ youtubeurl, setYoutubeurl ] = useState('')
    const [ writer, setWriter ] = useState('')
    const [ pw, setPw ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ contents, setContents ] = useState('')

    const [ writerError, setWriterError ] = useState('')
    const [ pwError, setPwError ] = useState('')
    const [ titleError, setTitleError ] = useState('')
    const [ contentsError, setContentsError ] = useState('')

    function onChangeWriter(event) {
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterError("")
          }
    }

    function onChangePw(event) {
        setPw(event.target.value)
        if(event.target.value !== ""){
            setPwError("")
          }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("")
          }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(event.target.value !== ""){
            setContentsError("")
          }
    }

    function onChangeYoutube(event) {
        setYoutubeurl(event.target.value)
        if(event.target.value !== ""){
          }
    }


    //클릭시 실행
    async function onClickSubmit() {
        if(writer === ("")) {
            setWriterError("이름을 작성해 주세요.")
        }

        if(pw === ("")) {
            setPwError("비밀번호를 작성해 주세요.")
        }

        if(title === ("")) {
            setTitleError("제목을 작성해 주세요.")
        }

        if(contents === ("")) {
            setContentsError("내용을 작성해 주세요.")
        }
        if(writer  !== "" && pw !== "" && title !== "" && contents){
            alert('등록완료')
        }
        //alert("버튼클릭확인")

        const result = await createBoard({
            variables:{
                createBoardInput: {
                    writer: writer,
                    password: pw,
                    title: title,
                    contents: contents,
                    youtubeUrl: youtubeurl
                    // boardAddress: boardaddress,
                    // images: images
                }
            }
        })
        console.log(result)
    }

    //return 위쪽은 Javascript 쓰는 곳
    //return 아래는 HTML 쓰는 곳
    return(
        <Wrapper>
            <Title>게시판 등록</Title>
            <WriterPasswordBox>
                <WriterBox>
                    <WriterName>작성자</WriterName>
                    <WriterText type="text" placeholder="이름을 입력해 주세요." onChange={onChangeWriter} />
                    <Error>{writerError}</Error>  
                </WriterBox>
                <PasswordBox>
                    <PasswordName>비밀번호</PasswordName>
                    <PasswordText type="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePw} />
                    <Error>{pwError}</Error> 
                </PasswordBox>
            </WriterPasswordBox>
            <TitleBox>
                <TitleName>제목</TitleName>
                <TitleText type="text" placeholder="제목을 작석해 주세요." onChange={onChangeTitle} /><br/>
                <Error>{titleError}</Error> 
            </TitleBox>
            <ContentsBox>
                <ContentsName>내용</ContentsName>
                <ContentsText type="text" placeholder="내용을 작성해 주세요." onChange={onChangeContents} /><br/>
                <Error>{contentsError}</Error> 
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
                <YoutubeText type="text" placeholder="링크를 복사해 주세요." onChange={onChangeYoutube}/><br/>
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
            <ButtonEnrollent onClick={onClickSubmit} >등록하기</ButtonEnrollent>
        </Wrapper>
    )
}