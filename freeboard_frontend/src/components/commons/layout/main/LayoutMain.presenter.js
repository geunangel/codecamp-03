import {
  Wrapper,
  Maintitle,
  Maintitle2,
  Hobbybutton,
  Mainbuttonbox,
} from "./LayoutMain.styles";

export default function Main(props) {
  return (
    <Wrapper>
      <Maintitle>hobbyus</Maintitle>
      <Maintitle2>당신의 취미는 무엇입니까?</Maintitle2>
      <Mainbuttonbox>
        <Hobbybutton>운동</Hobbybutton>
        <Hobbybutton>공예</Hobbybutton>
        <Hobbybutton>독서</Hobbybutton>
        <Hobbybutton>먹기</Hobbybutton>
        <Hobbybutton>예술</Hobbybutton>
        <Hobbybutton>키우기</Hobbybutton>
        <Hobbybutton>기타</Hobbybutton>
      </Mainbuttonbox>
    </Wrapper>
  );
}
