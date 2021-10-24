import SigninUI from "./Signin.presenter";
import { LOGIN_USER } from "./Signin.queries";
import { useMutation } from "@apollo/client";
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
  async function onClickSignin() {
    try {
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
      localStorage.setItem("refreshToken", "true");
      router.push("/market/success");
    } catch (error) {
      alert("회원가입을 먼저 해주세요.");
    }
  }

  //회원가입 페이지로 이동
  function onClickSigninup() {
    router.push("/signup");
  }
  return (
    <SigninUI
      onClickSignin={onClickSignin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSigninup={onClickSigninup}
    />
  );
}
