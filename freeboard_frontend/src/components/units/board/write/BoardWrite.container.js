import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import BoardWritePresenter from "./BoardWrite.presenter";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  FETCH_BOARD,
  UPLOAD_FILE,
} from "./BoardWrite.queries";

export default function BoardWriteContainer(props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //값이 입력되면 색 변하게 하는 state
  const [buttoncolor, setButtoncolor] = useState();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  //data로 응답
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detail },
  });

  //입력되는 값을 저장
  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtube, setYoutobe] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  //입력된 값 없을 시 에러
  const [writerError, setWriterError] = useState("");
  const [pwError, setPwError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  //이미지 업로드
  // const [fileUrls, setFileUrls] = useState(["", "", ""]); // 이미지 1차실습
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
    setZipcode(data.zipcode);
    setIsOpen(false);
  }

  //이미지업로드
  // **************** 1차 이미지 실습 *****************
  // function onChangeFileUrls(fileUrl, index) {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   console.log(newFileUrls);
  //   setFileUrls(newFileUrls);
  // }
  // **************** 2차 이미지 실습 *****************
  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  //등록버튼 클릭시 입력이 되지 않았으면 에러
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
              // images: [...fileUrls], // * 이미지 1차실습
              images: myImages,
            },
          },
        });
        console.log(result.data.createBoard._id);
        console.log(result);
        alert("등록완료");
        //alert("버튼클릭확인")
        router.push(`/boards/${router.query.boardId}`);
      } catch (error) {
        console.log(error);
      }
    }
  }

  //수정
  async function onClickEdit() {
    if (
      !title &&
      !contents &&
      !youtube &&
      !zipcode &&
      !address &&
      !addressDetail
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }
    const updateboardInput = {};
    if (title) updateboardInput.title = title;
    if (contents) updateboardInput.contents = contents;
    if (youtube) updateboardInput.youtubeUrl = youtube;
    if (zipcode || address || addressDetail) {
      updateboardInput.boardAddress = {};
      if (zipcode) updateboardInput.boardAddress.zipcode = zipcode;
      if (address) updateboardInput.boardAddress.address = address;
      if (addressDetail)
        updateboardInput.boardAddress.addressDetail = addressDetail;
    }

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    updateboardInput.images = nextImages;

    if (props.data?.fetchBoard.images?.length) {
      const prevImages = [...props.data?.fetchBoard.images];
      updateboardInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      updateboardInput.images = nextImages;
    }
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.detail,
          password: pw,
          updateBoardInput: updateboardInput,
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  //등록하는 페이지에서 취소버튼 눌렸을때
  function onClickList() {
    router.push("/boards/list");
  }

  //수정하는 페이지에서 취소버튼 눌렸을때
  function onClickCancle() {
    router.push(`/boards/${router.query.boardId}`);
  }

  return (
    <BoardWritePresenter
      data={data}
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
      onClickList={onClickList}
      onClickCancle={onClickCancle}
      // onChangeFileUrls={onChangeFileUrls}
      // fileUrls={fileUrls}
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
