import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import BoardWritePresenter from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";

export default function BoardWriteContainer(props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

  const [files, setFiles] = useState([null, null, null]);

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
      setIsActive(true);
    } else {
      setButtoncolor(false);
      setIsActive(false);
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
      setIsActive(false);
    } else {
      setButtoncolor(false);
      setIsActive(false);
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
      setIsActive(false);
    } else {
      setButtoncolor(false);
      setIsActive(false);
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
  function onCompleteAddressSearch(data) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
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
        const uploadFiles = files
          .filter((el) => el)
          .map((el) => uploadFile({ variables: { file: el } }));
        const results = await Promise.all(uploadFiles);
        const myImages = results.map((el) => el.data.uploadFile.url);
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
              images: myImages,
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

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  //수정
  async function onClickEdit() {
    if (
      !title &&
      false &&
      !youtubeUrl &&
      !zipcode &&
      !address &&
      !addressDetail
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }
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
      onChangeFiles={onChangeFiles}
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
      isActive={isActive}
    />
  );
}