// import '../styles/globals.css'
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useState, useEffect } from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { getAccessToken } from "../src/commons/libraries/validations/getAccessToken";

export const GlobalContext = createContext(null);
// function MyApp({ Component, pageProps }: AppProps)
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    //   const accessToken = localStorage.getItem("accessToken") || "";
    //   setAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  //실패했을때 재발급 요청
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // operation=>기존에 날렸던 쿼리
          operation.setContext({
            Headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  //임시로 썼음
  // headers: {
  //   authorization: `Bearer ${localStorage.getItem("accessToken")}`;
  // }

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
