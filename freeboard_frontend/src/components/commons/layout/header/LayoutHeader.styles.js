import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: maroon; */
  height: 100px;
  /* width: 100vh; */
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;
  //font-family: "myfont"; //글로벌스타일에서 적용한 폰트
`;

export const LogoImg = styled.img`
  margin-top: 10px;
  width: 70px;
  height: 90px;
  :hover {
    opacity: 50%;
  }
  cursor: pointer;
`;

export const LogoName = styled.div`
  /* margin-top: 0px; */
  margin-left: 10px;
  font-size: 70px;
  font-weight: 900;
  color: green;
  font-family: "my2font";
  :hover {
    opacity: 50%;
  }
  cursor: pointer;
`;

export const LogoBox = styled.div`
  display: flex;
`;
export const LogSignBox = styled.div`
  width: 300px;
  display: flex;
  /* justify-content: space-between; */
  margin-right: 20px;
`;

export const Signin = styled.div`
  margin-top: 40px;
  font-size: 20px;
  margin-right: 20px;
  /* color: rgba(240, 230, 230, 0.9); */
  font-family: "my2font";
  font-weight: bold;
  cursor: pointer;
`;

export const Signup = styled.div`
  margin-top: 40px;
  font-size: 20px;
  /* color: rgba(240, 230, 230, 0.9); */
  font-family: "my2font";
  font-weight: bold;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  margin-top: 30px;
  width: 600px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Search = styled.input`
  padding-left: 10px;
  width: 500px;
  height: 50px;
  font-size: 50px;
  font-family: "my2font";
  font-weight: bold;
  border: none;
  background: transparent;
  display: inline-block;
  :focus {
    opacity: 1;
    transform: scale(1);
  }
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 40px;
  margin-right: 20px;
  cursor: pointer;
  font-family: "my2font";
`;

export const Signout = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 40px;
  cursor: pointer;
  font-family: "my2font";
`;
