import {
  Wrapper,
  LogoImg,
  LogoName,
  LogoBox,
  SearchBox,
  Search,
  LogSignBox,
  Signin,
  Signup,
  Line,
  UserName,
  Signout,
} from "./LayoutHeader.styles";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <LogoBox onClick={props.onClickLogo}>
        <LogoImg src="/상추로고.png" />
        <LogoName>상추마켓</LogoName>
      </LogoBox>
      <SearchBox>
        <SearchSharpIcon />
        <Search placeholder="찾고싶은 물품을 여기에 적어보세요!" />
      </SearchBox>
      <LogSignBox>
        {props.accessToken && (
          <>
            <UserName onClick={props.onClickMyPage}>
              {props.data?.fetchUserLoggedIn.name}님
            </UserName>
            <Signout onClick={props.onClickSignout}>로그아웃</Signout>
          </>
        )}
        {!props.accessToken && (
          <>
            <Signin onClick={props.onClickSignin}>로그인</Signin>
            <Signup onClick={props.onClickSignup}>회원가입</Signup>
          </>
        )}
      </LogSignBox>
    </Wrapper>
  );
}
