import {
  Wrapper,
  Maintitle,
  MainNonMember,
  MainMember,
} from "./LayoutMain.styles";

export default function Main() {
  return (
    <Wrapper>
      <Maintitle>Guena Bar에 오신걸 환영합니다.</Maintitle>
      <MainNonMember>비회원으로 입장하기</MainNonMember>
      <MainMember>회원으로 입장하기</MainMember>
    </Wrapper>
  );
}
