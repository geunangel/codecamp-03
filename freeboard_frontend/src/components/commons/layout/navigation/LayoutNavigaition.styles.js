import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: mediumpurple; */
  height: 3vh;
  margin-left: 5%;
  margin-right: 5%;
`;

export const LayoutNavigaitionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
export const LayoutNavigaition = styled.div`
  width: 20vh;
  margin-top: 25px;
  text-align: center;
  font-size: 2vh;
  cursor: pointer;
  :hover {
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
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
  color: transparent;
`;
