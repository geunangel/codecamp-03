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
} from "./LayoutHeader.styles";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <LogoBox>
        <LogoImg src="/로고.png" />
        <LogoName></LogoName>
      </LogoBox>
      <SearchBox>
        <SearchSharpIcon />
        <Search placeholder="취미용품 찾아보세요" />
      </SearchBox>
      <LogSignBox>
        {props.accessToken && (
          <>
            <div>{props.data?.fetchUserLoggedIn.name}님</div>
            <div onClick={props.onClickSignout}>로그아웃</div>
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
