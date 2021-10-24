import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { useQuery } from "@apollo/client";
import { withAuth } from "../../../src/components/commons/hocs/WithAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export const SigninSuccess = (props) => {
  const { userInfo, setUserInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);
  console.log(userInfo);

  return <div>{data?.fetchUserLoggedIn.name}님</div>;
};

export default withAuth(SigninSuccess);
