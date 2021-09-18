import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutBanner from "./Banner/LayoutBanner.container";

import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  font-size: 30px;
  box-sizing: border-box;
`;

// const Header = styled.div`
//   background-color: mediumpurple;
//   height: 300px;
// `;

const SidebarWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: skyblue;
  height: 500px;
  width: 300px;
`;

// const Footer = styled.div`
//   background-color: mediumturquoise;
//   height: 300px;
// `;

// const Banner = styled.div`
//   height: 400px;
//   background-color: pink;
// `;

const Nevi = styled.div`
  height: 100px;
  background-color: orange;
  font-family: "myfont";
`;

//const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

const Body = styled.div``;

export default function Layout(props) {
  const router = useRouter();
  console.log(router);
  //const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤드 영역입니다.</Header> */}
      <LayoutHeader />
      <LayoutBanner />
      {/* <Banner>여기는 베너 영역입니다.</Banner> */}
      <Nevi>this is the nevigation area</Nevi>
      <SidebarWrapper>
        <Sidebar>여기는 사이드바 영역입니다.</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      <LayoutFooter />
      {/* {!isHiddenFooter && <LayoutFooter />} */}
      {/* <Footer>여기는 푸터 영역입니다.</Footer> */}
    </Wrapper>
  );
}
