import { Modal } from "antd";
import { Pay, UserInfo, UserName } from "./Mypage.styles";
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
      <UserInfo>나의 신상정보</UserInfo>
      <UserName>이름:{props.data?.fetchUserLoggedIn.name}</UserName>
      <div>포인트</div>
      {props.data?.fetchUserLoggedIn.userPoint.amount}
      <div>내프로필</div>
      <Pay onClick={props.onClickPayment}>포인트충전하기</Pay>
      <div>구매내역</div>
    </div>
  );
}
