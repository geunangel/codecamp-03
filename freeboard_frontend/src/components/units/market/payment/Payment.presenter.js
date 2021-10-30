export default function PaymentUI(props) {
  return (
    <>
      결제금액을 선택해주세요.
      <div>
        <div>
          <input
            onChange={props.onChangeAmount}
            name="rate"
            type="radio"
            id="100"
            checked
          />
          100
        </div>
        <div>
          <input
            onChange={props.onChangeAmount}
            name="rate"
            type="radio"
            id="200"
          />
          200
        </div>
        <div>
          <input
            onChange={props.onChangeAmount}
            name="rate"
            type="radio"
            id="300"
          />
          300
        </div>
        <div>
          <input
            onChange={props.onChangeAmount}
            name="rate"
            type="radio"
            id="400"
          />
          400
        </div>
        <div>
          <input
            onChange={props.onChangeAmount}
            name="rate"
            type="radio"
            id="500"
          />
          500
        </div>
      </div>
      <button onClick={props.onClickPayment}>결제하기</button>
    </>
  );
}
