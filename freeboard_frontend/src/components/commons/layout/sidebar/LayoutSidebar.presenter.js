import { Wrapper, LayoutSidebar } from "./LayoutSidebar.styles";

export default function SideBarUI(props) {
  return (
    <Wrapper>
      <LayoutSidebar onClick={props.onClickMypage}>마이페이지</LayoutSidebar>
      <LayoutSidebar>예약하기</LayoutSidebar>
      <LayoutSidebar>FAQ</LayoutSidebar>
      <LayoutSidebar onClick={props.onClickBoardList}>자유게시판</LayoutSidebar>
    </Wrapper>
  );
}
