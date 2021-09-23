import {
  Wrapper,
  LogoImg,
  LogoName,
  LogoBox,
  LogSignBox,
  Log,
  Sign,
} from "./LayoutHeader.styles";

export default function LayoutFooterUI() {
  return (
    <Wrapper>
      <LogoBox>
        <LogoImg src="/맥주.jpeg" />
        <LogoName>GEUNA Bar</LogoName>
      </LogoBox>
      <LogSignBox>
        <Log>login</Log>
        <Sign>signup</Sign>
      </LogSignBox>
    </Wrapper>
  );
}
