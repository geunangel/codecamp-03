import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: maroon; */
  height: 100px;
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;
  //font-family: "myfont"; //글로벌스타일에서 적용한 폰트
`;

export const LogoImg = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 80px;
`;

export const LogoName = styled.div`
  font-size: 80px;
  /* color: mintcream; */
  /* color: rgba(240, 230, 230, 0.9); */
`;

export const LogoBox = styled.div`
  display: flex;
`;
export const LogSignBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

export const Signin = styled.div`
  margin-top: 40px;
  font-size: 20px;
  /* color: rgba(240, 230, 230, 0.9); */
  /* font-family: ; */
`;

export const Signup = styled.div`
  margin-top: 40px;
  font-size: 20px;
  /* color: rgba(240, 230, 230, 0.9); */
`;

export const SearchBox = styled.div`
  margin-top: 40px;
  margin-left: 200px;
  width: 600px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Search = styled.input`
  padding-left: 10px;
  width: 400px;
  height: 40px;
  font-size: 30px;
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

export const Line = styled.div`
  width: 10px;

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
