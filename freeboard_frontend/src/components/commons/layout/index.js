import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigition from "./navigation/LayoutNavigaition.container";
import LayoutMain from "./main/LayoutMain.container";
import LayoutSidebar from "./sidebar/LayoutSidebar.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  font-size: 100%;
  box-sizing: border-box;
  background-color: magenta;
  background: radial-gradient(
    rgba(153, 051, 051, 0.2) 20%,
    rgba(102, 51, 051, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  box-sizing: border-box;
  margin: 30px auto;
`;

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  /* margin: auto; */
`;

export default function Layout(props) {
  const router = useRouter();
  console.log(router);
  // const isHidden = includes(router.pathname);

  return (
    <Wrapper>
      <LayoutMain />
      <LayoutHeader />
      <LayoutBanner />
      <WrapperRow>
        <WrapperColumn>
          <LayoutNavigition />
          <Body>{props.children}</Body>
        </WrapperColumn>
        <LayoutSidebar />
      </WrapperRow>
      <LayoutFooter />
    </Wrapper>
  );
}
