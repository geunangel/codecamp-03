import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const SigninTitle = styled.div`
  font-size: 50px;
`;
export const SigninEmail = styled.div`
  margin-bottom: 5px;
  font-size: 20px;
`;
export const SigninEmailInput = styled.input`
  width: 250px;
  height: 50px;
  border-color: #dadada;
  border-radius: 10px;
  :focus {
    box-shadow: 0 0 10px 0 green;
    border-color: green;
  }
`;
export const SigninPassword = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
`;
export const SigninPasswordInput = styled.input`
  width: 250px;
  height: 50px;
  border-color: #dadada;
  border-radius: 10px;
  :focus {
    box-shadow: 0 0 10px 0 green;
    border-color: green;
  }
`;
export const SigninBotton = styled.div`
  margin-bottom: 20px;
`;
