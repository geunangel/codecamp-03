import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseAplloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);

  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  //handleSubmit쓰면 data를 담아서 줌
  //이때 ()안에 이름을 꼭 data로 쓸 필요는 없음
  async function onClickLogin(data) {
    //로그인 처리하기!!!
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPassword,
      },
    });
    const accessToken = result.data.loginUser.accessToken;

    // axios.get(`koreajson.com`);
    // const result = await axios.get(`koreajson.com`); //client.query와 비교해보기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }

  return (
    <>
      {/* {userInfo.email ? `${userInfo.name}님 환영합니다.` : "로그인해주세요."} */}

      {userInfo.email ? (
        `${userInfo.name}님 환영합니다.`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일: <input type="text" {...register("myEmail")} />
          비밀번호: <input type="text" {...register("myPassword")} />
          {/* 버튼은 디폴트가 타입이 서브밋으로 되어있음 */}
          <button>로그인하기</button>
        </form>
      )}
    </>
  );
}
