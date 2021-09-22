import {
  Wrapper,
  Title,
  WriterPasswordBox,
  WriterBox,
  WriterName,
  WriterText,
  PasswordBox,
  PasswordName,
  PasswordText,
  TitleBox,
  TitleName,
  TitleText,
  ContentsBox,
  ContentsName,
  ContentsText,
  AddressBox,
  AddressSearchBox,
  Zipcode,
  AddressName,
  ButtonAddress,
  AddressText,
  YoutubeBox,
  YoutubeName,
  YoutubeText,
  ImgBox,
  ImgTitle,
  ImgUploadBox,
  ImgUpload,
  ImgText,
  MainBox,
  MainName,
  MainCheck,
  ButtonEnrollent,
  Error,
} from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardWritePresenter(props) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper>
        <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
        <WriterPasswordBox>
          <WriterBox>
            <WriterName>작성자</WriterName>
            <WriterText
              type="text"
              placeholder="이름을 입력해 주세요."
              onChange={props.onChangeWriter}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <Error>{props.writerError}</Error>
          </WriterBox>
          <PasswordBox>
            <PasswordName>비밀번호</PasswordName>
            <PasswordText
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={props.onChangePw}
            />
            <Error>{props.pwError}</Error>
          </PasswordBox>
        </WriterPasswordBox>
        <TitleBox>
          <TitleName>제목</TitleName>
          <TitleText
            type="text"
            placeholder="제목을 작석해 주세요."
            onChange={props.onChangeTitle}
          />
          <br />
          <Error>{props.titleError}</Error>
        </TitleBox>
        <ContentsBox>
          <ContentsName>내용</ContentsName>
          <ContentsText
            type="text"
            placeholder="내용을 작성해 주세요."
            onChange={props.onChangeContents}
          />
          <br />
          <Error>{props.contentsError}</Error>
        </ContentsBox>
        <AddressBox>
          <AddressName>주소</AddressName>
          <AddressSearchBox>
            <Zipcode
              name="zipcode"
              placeholder="07250"
              readOnly
              value={
                props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <ButtonAddress onClick={props.onClickAddressSearch}>
              우편번호 검색
            </ButtonAddress>
            <br />
          </AddressSearchBox>
          <AddressText type="text" />
          <br />
          <AddressText type="text" />
          <br />
        </AddressBox>
        <YoutubeBox>
          <YoutubeName>유튜브</YoutubeName>
          <YoutubeText
            type="text"
            placeholder="링크를 복사해 주세요."
            onChange={props.onChangeYoutobe}
          />
          <br />
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
          <MainCheck type="radio" />
          유튜브
          <MainCheck type="radio" />
          사진
        </MainBox>
        {!props.isEdit && (
          <ButtonEnrollent
            onClick={props.onClickSubmit}
            buttoncolor={props.buttoncolor}
          >
            등록하기
          </ButtonEnrollent>
        )}
        {props.isEdit && (
          <ButtonEnrollent onClick={props.onClickEdit}>
            수정하기
          </ButtonEnrollent>
        )}
      </Wrapper>
    </>
  );
}
