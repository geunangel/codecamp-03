import SigninUI from "./Signin.presenter";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Signin.queries";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function Signin() {
  const { setAccessToken } = useContext(GlobalContext);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  //로그인버튼 클릭시 로그인 됨
  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    console.log(result.data?.loginUser.accessToken);

    //임시로 만듬(새로고침 할때마다 지워져서)
    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);

    setAccessToken(result.data?.loginUser.accessToken);
    router.push("/all");
  }

  //회원가입 페이지로 이동
  function onClickSigninup() {
    router.push("/signup");
  }
  return (
    <SigninUI
      onClickSigninup={onClickSigninup}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
