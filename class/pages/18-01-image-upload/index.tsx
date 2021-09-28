import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";

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

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const fileRdf = useRef<HTMLInputElement>();

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);

    //파일검증
    //파일이 없을때 띄움
    if (!myFile) {
      alert("파일이 없습니다!");
      return;
    }

    //사이즈는 보통 byte로 나옴
    //5MB 5*1024곱하면 됨
    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다(제한: 5MB)");
      return;
    }

    //jpeg,png일때만 넣고 싶을때
    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다!");
      return;
    }

    //위에 if문 다 통과했을때 업로드 가능
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
  }

  function onClickDiv() {
    fileRdf.current?.click();
  }

  //
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setContents] = useState("");

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

  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    });
  }

  return (
    <>
      <div>이미지 업로드!!!</div>
      <div
        style={{ width: "150px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickDiv}
      >
        이미지선택
      </div>
      <input
        ref={fileRdf}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <img
        src={`https://storage.googleapis.com/${imageUrl}`}
        alt="이미지없음"
      />
      <br />
      작성자: <input type="text" onChange={onChangeMyWriter} />
      <br />
      비밀번호: <input type="text" onChange={onChangeMyPassword} />
      <br />
      제목: <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용: <input type="text" onChange={onChangeMyContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
