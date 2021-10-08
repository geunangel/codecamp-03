import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    //옛날 게임기 영판폰트
    font-family: "myfont"; //폰트이름
    src: url("/fonts/scifibit.ttf"); //폰트위치
  }
  @font-face {
    //귀여운글씨무지개색폰트
    font-family: "myrainbowfont"; //폰트이름
    src: url("/fonts/Gilbert-Color Bold Preview5.otf"); //폰트위치
  }
  //귀여운글씨폰트
  @font-face {
    font-family: "myblackfont"; //폰트이름
    src: url("/fonts/Gilbert-Bold Preview5.otf"); //폰트위치
  }

  @font-face {
    //서예 글씨체
    font-family: "myBMfont"; //폰트이름
    src: url("/fonts/BMEuljiro10yearslaterOTF.otf"); //폰트위치
  }

  @font-face {
    //손글씨폰트(귀여운버전)
    font-family: "my1font"; //폰트이름
    src: url("/fonts/나눔손글씨 다행체.ttf"); //폰트위치
  }

  @font-face {
    //손글씨폰트(귀여운버전)
    font-family: "my2font"; //폰트이름
    src: url("/fonts/나눔손글씨 무궁화.ttf"); //폰트위치
  }
`;
