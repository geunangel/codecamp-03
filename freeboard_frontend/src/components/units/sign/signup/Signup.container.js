import SignupUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword1(event) {
    setPassword1(event.target.value);
  }

  function onchangePassword2(event) {
    setPassword2(event.target.value);
  }

  async function onClickSignup() {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: email,
            password: password1,
            name: name,
          },
        },
      });
      console.log(result.data.createUser._id);
      alert("회원가입완료");
    } catch (error) {
      // console.log(error);
      alert(error);
    }
    router.push("/signin");
  }

  return (
    <SignupUI
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword1={onChangePassword1}
      onchangePassword2={onchangePassword2}
      onClickSignup={onClickSignup}
    />
  );
}
