import { Wrapper, LayoutSidebar } from "./LayoutSidebar.styles";

export default function SideBarUI(props) {
  return (
    <Wrapper>
      <LayoutSidebar onClick={props.onClickMypage}>마이페이지</LayoutSidebar>
      <LayoutSidebar>장바구니</LayoutSidebar>
      <LayoutSidebar>Q&A</LayoutSidebar>
      <LayoutSidebar>FAQ</LayoutSidebar>
    </Wrapper>
  );
}
