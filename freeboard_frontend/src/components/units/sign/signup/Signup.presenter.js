import {} from "./Signup.styles";

export default function SignupUI(props) {
  return (
    <div>
      <div>회원가입</div>
      <div>
        <div>이름</div>
        <input
          onChange={props.onChangeName}
          type="text"
          placeholder="이름을 입력해주세요."
        />
      </div>
      <div>
        <div>이메일</div>
        <input
          onChange={props.onChangeEmail}
          type="text"
          placeholder="이메일을 입력해주세요."
        />
      </div>
      <div>
        <div>비밀번호</div>
        <input
          onChange={props.onChangePassword1}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div>
        <div>비밀번호 확인</div>
        <input
          onChange={props.onchangePassword2}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div>
        <button onClick={props.onClickSignup}>회원가입하기</button>
      </div>
    </div>
  );
}
