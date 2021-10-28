export default function PaymentUI(props) {
  return (
    <>
      결제금액을 선택해주세요.
      <div onChange={props.onChangeAmount}>
        <input type="select" value="100" defaultValue />
        <input type="select" value="200" />
        <input type="select" value="300" />
        <input type="select" value="400" />
        <input type="select" value="500" />
      </div>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
