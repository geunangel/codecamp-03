import { Wrapper, ShoppingCart } from "./LayoutSidebar.styles";

export default function SideBarUI(props) {
  return (
    <Wrapper>
      <ShoppingCart src="/빈카트.png" onClick={props.onClickMarket} />
      <ShoppingCart src="/꽉찬카트.png" onClick={props.onClickMarket} />
    </Wrapper>
  );
}
