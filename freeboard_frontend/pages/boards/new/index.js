import { useState } from 'react'
import {
    Wrapper, Title,
    WriterPasswordBox, WriterBox, WriterName, WriterText,
    PasswordBox, PasswordName, PasswordText,
    TitleBox, TitleName, TitleText,
    ContentsBox, ContentsName, ContentsText,
    PostBox, PostSearchBox, PostSearch, PostName, ButtonPost, PostText,
    YoutubeBox, YoutubeName, YoutubeText,
    ImgBox, ImgTitle, ImgUploadBox, ImgUpload, ImgText,
    MainBox, MainName, MainCheck, ButtonEnrollent
} from '../../../styles/BoardsNew.styles'

export default function BoardsNewPage(){

    //return 위쪽은 Javascript 쓰는 곳
    //return 아래는 HTML 쓰는 곳
    return(
        <Wrapper>
            <Title>게시판 등록</Title>
            <WriterPasswordBox>
                <WriterBox>
                    <WriterName>작성자</WriterName>
                    <WriterText type="text" placeholder="이름을 적어주세요." />
                </WriterBox>
                <PasswordBox>
                    <PasswordName>비밀번호</PasswordName>
                    <PasswordText type="password" placeholder="비밀번호를 입력해주세요." />
                </PasswordBox>
            </WriterPasswordBox>
            <TitleBox>
                <TitleName>제목</TitleName>
                <TitleText type="text" placeholder="제목을 작석해주세요." /><br/>
            </TitleBox>
            <ContentsBox>
                <ContentsName>내용</ContentsName>
                <ContentsText type="text" placeholder="내용을 작성해주세요." /><br/>
            </ContentsBox>
            <PostBox>
                <PostName>주소</PostName>
                <PostSearchBox>
                    <PostSearch type="text"></PostSearch>
                    <ButtonPost>우편번호 검색</ButtonPost><br/>
                </PostSearchBox>
                <PostText type="text" /><br/>
                <PostText type="text" /><br/>
            </PostBox>
            <YoutubeBox>
                <YoutubeName>유튜브</YoutubeName>
                <YoutubeText type="text" placeholder="링크를 복사해주세요." /><br/>
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
            유튜브<MainCheck type="radio" />
            사진<MainCheck type="radio" />
            </MainBox>
            <ButtonEnrollent>등록하기</ButtonEnrollent>
        </Wrapper>
    )
}