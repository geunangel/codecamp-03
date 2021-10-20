import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: mediumpurple;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: mediumvioletred;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: mediumturquoise;
  }

  /* 
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 500px;
    height: 500px;
    background-color: mediumvioletred;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: mediumturquoise;
  } */
`;

export default function ResponsiveMediaPage() {
  return <Wrapper>상자</Wrapper>;
}
