import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigition from "./navigation/LayoutNavigaition.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  font-size: 30px;
  box-sizing: border-box;
`;

const SidebarWrapper = styled.div`
  display: flex;
`;

//const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

const Body = styled.div``;

export default function Layout(props) {
  const router = useRouter();
  console.log(router);
  //const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigition />
      <SidebarWrapper>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      <LayoutFooter />
    </Wrapper>
  );
}
