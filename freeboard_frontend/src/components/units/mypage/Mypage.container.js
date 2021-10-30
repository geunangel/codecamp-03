import MyPageUI from "./Mypage.presenter";
import { FETCH_USER_LOGGED_IN } from "./Mypage.queries";
import { useState } from "react";
import { useQuery } from "@apollo/client";

export default function MyprofilePage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isOpen, setIsOpen] = useState(false);

  // const onClickPayment = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const onClickPayment = () => {
    console.log("눌려지니?");
    setIsOpen(true);
  };

  return (
    <MyPageUI
      data={data}
      onClickPayment={onClickPayment}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}
