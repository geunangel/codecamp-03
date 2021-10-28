import MyPageUI from "./Mypage.presenter";
import { FETCH_USER_LOGGED_IN } from "./Mypage.queries";
import { useState } from "react";

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isOpen, setIsOpen] = useState(false);

  const onClickPayment = () => {
    setIsOpen((prev) => !prev);
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
