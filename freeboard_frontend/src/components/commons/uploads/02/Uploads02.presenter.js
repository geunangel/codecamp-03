import {
  ImgUpButton,
  ImgUpload,
  ImgText,
  UploadFileHidden,
} from "./Uploads02.styles";

export default function Uploads02UI(props) {
  return (
    <>
      {/* <ImgUploadBox> */}
      {props.imageUrl || props.defaultFileUrl ? (
        <ImgUpload
          onClick={props.onClickImg}
          src={
            props.imageUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <ImgUpButton type="button" onClick={props.onClickImg}>
          <ImgText>+</ImgText>
          <ImgText>Upload</ImgText>
        </ImgUpButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeImg}
      />
      {/* </ImgUploadBox> */}
    </>
  );
}
