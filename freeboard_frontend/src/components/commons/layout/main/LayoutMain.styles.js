import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
`;

export const Maintitle = styled.div`
  /* color: rgba(98, 0, 0, 0.9); */
  font-size: 30vh;
  font-family: "myrainbowfont";
  background-image: linear-gradient(
    90deg,
    red,
    orange,
    yellow,
    green,
    blue,
    navy,
    purple
  );
  background-clip: text;
  color: transparent;
`;

export const Maintitle2 = styled.div`
  /* color: rgba(98, 0, 0, 0.7); */
  margin-top: 20px;
  font-size: 100px;
  font-weight: bold;
  font-family: "my2font";
`;

export const Hobbybutton = styled.button`
  margin-top: 30px;
  width: 20vh;
  height: 10vh;
  font-size: 5vh;
  border-radius: 30px;
  border: none;
  font-family: "my1font";
  font-weight: bold;
  background-color: transparent;
  :hover {
    background-color: black;
    color: white;
  }
  cursor: pointer;
`;

export const Mainbuttonbox = styled.div`
  display: flex;
  flex-direction: row;
`;
