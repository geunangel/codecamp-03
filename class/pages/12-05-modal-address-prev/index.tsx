import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ModalAddressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    //console.log(data);
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);

    //저장된 후 모달이 자동으로 종료됨
    setIsOpen((prev) => !prev);
  };

  // function onOpenZipcode() {
  //   //!붙여서 기존꺼에 반대로
  //   setIsOpen((prev) => !prev);
  // }
  // function onCloseZipcode() {
  //   setIsOpen((prev) => !prev);
  // }

  //껐다켰다
  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      {/* 다시 띄웠을때 그대로 남아있음 */}
      {/* <button onClick={onOpenZipcode}>우편번호 검색</button>
      <Modal visible={isOpen} onCancel={onCloseZipcode}>
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}

      {/* 다시 띄웠을때 사라져있음 */}
      <button onClick={onToggleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
