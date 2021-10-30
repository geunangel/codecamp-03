import { Modal } from "antd";
import { Pay } from "./Mypage.styles";
import Payment from "../market/payment/Payment.container";
export default function MyPageUI(props) {
  return (
    <div>
      {props.isOpen && (
        <Modal
          visible={props.isOpen}
          onCancel={() => props.setIsOpen((prev) => !prev)}
          onOk={() => props.setIsOpen((prev) => !prev)}
        >
          <Payment />
        </Modal>
      )}
      <div>나의 신상정보</div>
      <div>이름:{props.data?.fetchUserLoggedIn.name}</div>
      <div>포인트</div>
      {props.data?.fetchUserLoggedIn.userPoint.amount}
      <div>내프로필</div>
      <Pay onClick={props.onClickPayment}></Pay>
    </div>
  );
}
