import {} from "./Signup.styles";

export default function SignupUI() {
  return (
    <div>
      <div>회원가입</div>
      <div>
        <div>이메일</div>
        <input type="text" placeholder="이메일을 입력해주세요." />
      </div>
      <div>
        <div>이름</div>
        <input type="text" placeholder="이름을 입력해주세요." />
      </div>
      <div>
        <div>비밀번호</div>
        <input type="text" placeholder="비밀번호를 입력해주세요." />
      </div>
      <div>
        <div>비밀번호 확인</div>
        <input type="text" placeholder="비밀번호를 입력해주세요." />
      </div>
      <div>
        <button>회원가입하기</button>
      </div>
    </div>
  );
}
