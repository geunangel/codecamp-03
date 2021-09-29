import { useRef, useState } from "react";
import { fileValidation } from "../../../src/commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const fileRef = useRef<HTMLInputElement>();
  const [imageUrl, setImageUrl] = useState();
  const [myFile, setMyFile] = useState();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setContents] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  function onClickMagenta() {
    fileRef.current.click();
  }

  function onClickFile(event) {
    const file = event.target.files[0];
    //파일검증
    if (!fileValidation(file)) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target.result);
      setMyFile(file);
    };
  }

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }
  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }
  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
  }
  function onChangeMyContents(event) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    const start = performance.now();
    const result = await Promise.all([
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);
    const end = performance.now();
    console.log(end - start);

    const urls = result.map((el) => el.data.uploadFile.url);

    // const result = await
    createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: urls,
          // images: [imageUrl],
        },
      },
    });
    // console.log(result.data.createBoard._id);
  }

  return (
    <>
      작성자: <input onChange={onChangeMyWriter} />
      <br />
      비밀번호: <input onChange={onChangeMyPassword} />
      <br />
      제목: <input onChange={onChangeMyTitle} />
      <br />
      내용: <input onChange={onChangeMyContents} />
      <br />
      <div
        style={{ width: "200px", height: "50px", backgroundColor: "magenta" }}
        onClick={onClickMagenta}
      >
        이미지 업로드
      </div>
      <br />
      <img src={imageUrl} />
      <br />
      <input type="file" ref={fileRef} onChange={onClickFile} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
