import {
  Wrapper,
  LogoImg,
  LogoName,
  LogoBox,
  LogSignBox,
  Signin,
  Signup,
} from "./LayoutHeader.styles";
import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LayoutFooterUI(props) {
  const { userInfo, setUserInfo } = useContext(GlobalContext);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);
  console.log(userInfo);

  return (
    <Wrapper>
      <LogoBox>
        <LogoImg src="/맥주.jpeg" />
        <LogoName>GEUNA Bar</LogoName>
      </LogoBox>
      <LogSignBox>
        {data?.fetchUserLoggedIn.name && (
          <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
        )}
        {data?.fetchUserLoggedIn.name && <div>signout</div>}
        {!data?.fetchUserLoggedIn.name && (
          <Signin onClick={props.onClickSignin}>signin</Signin>
        )}
        {!data?.fetchUserLoggedIn.name && (
          <Signup onClick={props.onClickSignup}>signup</Signup>
        )}
      </LogSignBox>
    </Wrapper>
  );
}
