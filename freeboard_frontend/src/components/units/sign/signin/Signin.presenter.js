import {
  Wrapper,
  SigninTitle,
  SigninEmail,
  SigninEmailInput,
  SigninPassword,
  SigninPasswordInput,
  SigninBotton,
} from "./Signin.styles";

export default function SigninUI(props) {
  return (
    <Wrapper>
      <SigninTitle>로그인</SigninTitle>
      <SigninEmail>
        <SigninEmailInput
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeEmail}
        />
      </SigninEmail>
      <SigninPassword>
        <SigninPasswordInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={props.onChangePassword}
        />
      </SigninPassword>
      <div>
        <input type="radio" />
        로그인 상태 유지
      </div>
      <SigninBotton>
        <button onClick={props.onClickSignin}>로그인하기</button>
      </SigninBotton>
      <hr />
      <div>
        <button>이메일 찾기</button>
        <button>비밀번호 찾기</button>
        <button onClick={props.onClickSigninup}>회원가입</button>
      </div>
    </Wrapper>
  );
}
