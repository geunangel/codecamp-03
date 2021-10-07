import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "myfont"; //폰트이름
    src: url("/fonts/scifibit.ttf"); //폰트위치
  }
  @font-face {
    font-family: "myrainbowfont"; //폰트이름
    src: url("/fonts/Gilbert-Color Bold Preview5.otf"); //폰트위치
  }

  @font-face {
    font-family: "myblackfont"; //폰트이름
    src: url("/fonts/Gilbert-Bold Preview5.otf"); //폰트위치
  }

  @font-face {
    font-family: "myBMfont"; //폰트이름
    src: url("/fonts/BMEuljiro10yearslaterOTF.otf"); //폰트위치
  }
`;
