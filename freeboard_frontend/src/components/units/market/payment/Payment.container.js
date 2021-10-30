import Head from "next/head";
import { useState } from "react";
import PaymentUI from "./Payment.presenter";
import { useMutation } from "@apollo/client";

import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./Payment.queries";

export default function Payment() {
  const [amount, setAmount] = useState("");
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangeAmount = (e) => {
    setAmount(e.target.id);
  };

  const onClickPayment = () => {
    console.log(amount);
    const IMP = window.IMP; // 생략 가능
    // IMP.init("{가맹점 식별코드}"); // 예: imp00000000
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", //사용하는 회사마다 다름
        name: "포인트충전",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async function (rsp) {
        // callback
        if (rsp.success) {
          console.log(rsp);
          //mutation()=>createPointTransactionOfLoading
          // ...,
          // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);
          alert("충전이 완료되었습니다.");
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  };
  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PaymentUI
        onClickPayment={onClickPayment}
        onChangeAmount={onChangeAmount}
      />
    </>
  );
}
