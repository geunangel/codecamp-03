import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: mediumpurple; */
  height: 3vh;
  margin-bottom: 50px;
`;

export const LayoutNavigaitionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
export const LayoutNavigaition = styled.div`
  width: 20vh;
  margin-top: 10px;
  text-align: center;
  font-size: 4vh;
  cursor: pointer;
  font-family: "my2font";
  font-weight: bold;
  :hover {
    opacity: 50%;
    font-size: 3vh;
    color: black;
  }
`;

export const Line = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 3px;
  background-color: green;
  opacity: 0.5;
`;
