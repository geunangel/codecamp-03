import { Modal } from "antd";
import Payment from "../market/payment/Payment.container";
export default function MyPageUI(props) {
  return (
    <div>
      <div>나의 신상정보</div>
      <div>이름:{props.data?.fetchUserLoggedIn.name}</div>
      <div>금액:</div>
      <div>포인트</div>
      <div>내프로필</div>
      <div onClick={props.onClickPayment}>
        충전하기
        {props.isOpen && (
          <Modal
            visible={props.isOpen}
            onCancel={() => props.setIsOpen((prev) => !prev)}
            onOk={() => props.setIsOpen((prev) => !prev)}
          >
            <Payment data={props.data} />
          </Modal>
        )}
      </div>
    </div>
  );
}
