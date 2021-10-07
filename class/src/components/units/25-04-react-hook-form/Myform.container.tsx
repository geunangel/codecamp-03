import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Myform.validations";
import MyformUI from "./Myform.presenter";

export default function Myform() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  console.log(formState);

  function onClickLogin(data) {
    //handleSubmit을 써서 데이터가 들어옴
    console.log(data);
  }

  return (
    <MyformUI
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}
