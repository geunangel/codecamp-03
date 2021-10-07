import {
  Wrapper,
  Maintitle,
  Maintitle2,
  MainNonMember,
  MainMember,
} from "./LayoutMain.styles";

export default function Main(props) {
  return (
    <Wrapper>
      <Maintitle>GEUNA Bar</Maintitle>
      <Maintitle2>입장을 원하시면 아래 버튼을 클릭해주세요</Maintitle2>
      <MainNonMember onClick={props.onClickNonMember}>
        비회원으로 입장하기
      </MainNonMember>
      <MainMember onClick={props.onClickSignin}>회원으로 입장하기</MainMember>
    </Wrapper>
  );
}
