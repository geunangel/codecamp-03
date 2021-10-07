import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//*=>전체를 뜻 함 as=>사용하고 싶은 이름을 정함
import * as yup from "yup";
import styled from "@emotion/styled";

const schema = yup.object().shape({
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

interface IProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "")};
`;

export default function ReactHookFormYupIsValidPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data) {
    //handleSubmit을 써서 데이터가 들어옴
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>리액트 훅 폼 연습!!!</div>
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <MyButton type="submit" isValid={formState.isValid}>
        로그인하기
      </MyButton>
      {/* <button type="reset">초기화하기</button> */}
    </form>
  );
}
