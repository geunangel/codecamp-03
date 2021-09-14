import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSuccess() {
    try {
      Modal.confirm({ content: "게시물 등록에 성공했습니다." }); //alert("게시물 등록에 성공했습니다.");
    } catch (error) {
      Modal.error({ content: "게시물 등록에 실패했습니다." }); //alert("게시물 등록에 실패했습니다.");
    }
  }

  function onClickFail() {
    try {
      // alert("게시물 등록에 성공했습니다.");
      //throw 로 에러를 강제로 만들 수 있음
      throw new Error("강제로 에러 발생시키기!!!");
    } catch (error) {
      //alert("게시물 등록에 실패했습니다.");
      Modal.error({ content: "error.message" }); //alert("error.message");
    }
  }

  return (
    <>
      <button onClick={onClickSuccess}>알림창 (성공했을때)</button>
      <button onClick={onClickFail}>알림창 (실패했을때)</button>
    </>
  );
}
