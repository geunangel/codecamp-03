import { Modal } from "antd";
import {
  Wrapper,
  Pay,
  UserInfo,
  UserName,
  PointPay,
  Profile,
  PointHistory,
} from "./Mypage.styles";
import Payment from "../market/payment/Payment.container";
export default function MyPageUI(props) {
  return (
    <Wrapper>
      {props.isOpen && (
        <Modal
          visible={props.isOpen}
          onCancel={() => props.setIsOpen((prev) => !prev)}
          onOk={() => props.setIsOpen((prev) => !prev)}
        >
          <Payment />
        </Modal>
      )}
      <div>내상품</div>
      <div>|</div>
      <div>마이찜</div>
      <UserInfo>나의 신상정보</UserInfo>
      <UserName>이름:{props.data?.fetchUserLoggedIn.name}</UserName>
      <PointPay>포인트</PointPay>
      <Pay onClick={props.onClickPayment}>포인트충전하기</Pay>
      {props.data?.fetchUserLoggedIn.userPoint.amount}
      <Profile>내프로필</Profile>
      <PointHistory>구매내역</PointHistory>
    </Wrapper>
  );
}
