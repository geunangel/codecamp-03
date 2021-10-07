//*=>전체를 뜻 함 as=>사용하고 싶은 이름을 정함
import * as yup from "yup";

export const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일을 형식이 적합하지 않습니다.")
    .required("반드시 입력해야 되는 필수 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(16, "비밀번호는 최대 16자리까지 입니다.")
    .required("비밀번호는 반드시 입력해주세요."),
});
