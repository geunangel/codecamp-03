import {
  ImgUploadBox,
  ImgUpButton,
  ImgUpload,
  ImgText,
  UploadFileHidden,
} from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      <ImgUploadBox>
        {props.imageUrl ? (
          <ImgUpload onClick={props.onClickImg} src={props.imageUrl} />
        ) : (
          <ImgUpButton onClick={props.onClickImg}>
            <ImgText>+</ImgText>
            <ImgText>등록하기</ImgText>
          </ImgUpButton>
        )}
        <UploadFileHidden
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeImg}
        />
      </ImgUploadBox>
    </>
  );
}
