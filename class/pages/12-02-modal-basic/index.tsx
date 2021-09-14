import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPsge() {
  //클릭했을때 사용하려고 state를 씀
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPassword, setMypassword] = useState("");

  function onChangeMyPassword(event) {
    setMypassword(event.target.value);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창 열기</Button>

      {/* 함수 사용없이 <>안에 true를 바로 주면 항상 열림 반대로 false를 바로 주면 항상 안뜸 */}
      <Modal visible={isModalVisible} onCancel={closeModal}>
        {/* ok눌렸을때도 닫기 원하면 onOk={closeModal} 주면 됨 */}
        비밀번호 입력: <input type="password" onChange={onChangeMyPassword} />
      </Modal>
    </>
  );
}
