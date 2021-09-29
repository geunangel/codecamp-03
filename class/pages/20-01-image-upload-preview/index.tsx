import { useRef, useState } from "react";
import { fileValidation } from "../../src/commons/libraries/validation";
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
  const [uploadFile] = useMutation(UPLOAD_FILE);
  //   const [createBoard] = useMutation(CREATE_BOARD);

  function onClickGray() {
    fileRef.current.click();
  }

  function onClickFile(event) {
    const file = event.target.files[0];
    //파일검증
    if (!fileValidation(file)) return;

    //파일 읽는 기능
    //내컴퓨터에서만 있는 임시주소
    //스토리지엔 안올라가서 빠름
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target.result);
      setMyFile(file);
    };
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

    // result.map((el)=>(el.data.uploadfile.url))//[url1,url2,url3, ...]
    const urls = result.map((el) => el.data.uploadfile.url);

    //시간체크 => performance.now()
    // const start = performance.now();
    // const result1 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result2 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result3 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result4 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result5 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const end = performance.now();
    // console.log(end - start);

    // const url = result.data.uploadFile.url;

    //게시물 등록
    //createBoard({variables: {
    //createBoardInput: {
    //...
    //images: urls,
    //}}});
  }

  return (
    <>
      <div
        style={{ width: "200px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지 업로드!!
      </div>
      <br />
      <img src={imageUrl} />
      <br />
      <input type="file" ref={fileRef} onChange={onClickFile} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
