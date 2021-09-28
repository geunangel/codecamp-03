import { useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";

export default function BoardWriteContainer(props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [buttoncolor, setButtoncolor] = useState();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtube, setYoutobe] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setWriterError] = useState("");
  const [pwError, setPwError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [imageUrl, setImageUrl] = useState([]);
  const fileRef = useRef();

  //작성자
  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (
      event.target.value !== "" &&
      pw !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setWriterError("");
      setButtoncolor(true);
    } else {
      setButtoncolor(false);
    }
  }

  //패스워드
  function onChangePw(event) {
    setPw(event.target.value);
    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setWriterError("");
      setButtoncolor(true);
    } else {
      setButtoncolor(false);
    }
  }

  //제목
  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (
      writer !== "" &&
      pw !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setWriterError("");
      setButtoncolor(true);
    } else {
      setButtoncolor(false);
    }
  }

  //내용
  function onChangeContents(event) {
    setContents(event.target.value);
    if (
      writer !== "" &&
      pw !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setWriterError("");
      setButtoncolor(true);
    } else {
      setButtoncolor(false);
    }
  }

  //유튜브
  function onChangeYoutobe(event) {
    setYoutobe(event.target.value);
  }

  //주소
  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch() {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  //이미지 업로드
  async function onChangeImg(event) {
    const imgFile = event.target.files[0];
    console.log(imgFile);

    //검증
    if (!imgFile) {
      alert("파일이 없습니다.");
      return;
    }

    if (imgFile.size > 10 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다.");
      return;
    }

    if (!imgFile.type.includes("jpeg") && !imgFile.type.includes("png")) {
      alert("jpeg나 png만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: imgFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
    // setImageUrl(imageUrl.concat([result.data.uploadFile.url]));
  }

  //이미지 업로드
  function onClickImg1() {
    fileRef.current?.click();
  }
  function onClickImg2() {
    fileRef.current?.click();
  }
  function onClickImg3() {
    fileRef.current?.click();
  }

  //수정
  async function onClickEdit() {
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.detail,
          password: pw,
          updateBoardInput: {
            title: title,
            contents: contents,
            youtubeUrl: youtube,
          },
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  //등록
  async function onClickSubmit() {
    if (writer === "") {
      setWriterError("이름을 작성해 주세요.");
    }

    if (pw === "") {
      setPwError("비밀번호를 작성해 주세요.");
    }

    if (title === "") {
      setTitleError("제목을 작성해 주세요.");
    }

    if (contents === "") {
      setContentsError("내용을 작성해 주세요.");
    }
    //모두 다 입력시 등록
    if (writer !== "" && pw !== "" && title !== "" && contents) {
      //등록
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: pw,
              title: title,
              contents: contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              images: [imageUrl],
            },
          },
        });
        console.log(result.data.createBoard._id);
        console.log(result);
        alert("등록완료");
        //alert("버튼클릭확인")
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <BoardWritePresenter
      onChangeWriter={onChangeWriter}
      onChangePw={onChangePw}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutobe={onChangeYoutobe}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeImg={onChangeImg}
      onClickImg1={onClickImg1}
      onClickImg2={onClickImg2}
      onClickImg3={onClickImg3}
      fileRef={fileRef}
      writerError={writerError}
      pwError={pwError}
      titleError={titleError}
      contentsError={contentsError}
      buttoncolor={buttoncolor}
      isEdit={props.isEdit}
      data={props.data}
      address={address}
      zipcode={zipcode}
      isOpen={isOpen}
    />
  );
}
