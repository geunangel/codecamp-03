import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ModalAddressPage() {
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
    setIsOpen(false);
  };

  function onOpenZipcode() {
    setIsOpen(true);
  }

  function onCloseZipcode() {
    setIsOpen(false);
  }

  return (
    <>
      {/* 다시 띄웠을때 그대로 남아있음 */}
      {/* <button onClick={onOpenZipcode}>우편번호 검색</button>
      <Modal visible={isOpen} onCancel={onCloseZipcode}>
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}

      {/* 다시 띄웠을때 사라져있음 */}
      <button onClick={onOpenZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onCloseZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
