import {} from "./Signin.styles";

export default function SigninUI(props) {
  return (
    <div>
      <div>로그인</div>
      <div>
        <input
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeEmail}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={props.onChangePassword}
        />
      </div>
      <div>
        <input type="radio" />
        로그인 상태 유지
      </div>
      <div>
        <button onClick={props.onClickSignin}>로그인하기</button>
      </div>
      <hr />
      <div>
        <button>이메일 찾기</button>
        <button>비밀번호 찾기</button>
        <button onClick={props.onClickSigninup}>회원가입</button>
      </div>
    </div>
  );
}
