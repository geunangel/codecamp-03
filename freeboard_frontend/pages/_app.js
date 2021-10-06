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

export const GlobalContext = createContext(null);
// function MyApp({ Component, pageProps }: AppProps)
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken") || "";
  //   setAccessToken(accessToken);
  // }, []);

  //위,아래와 동일한 결과
  // if(process.browser){
  //   localStorage
  // }else{
  //   return ""
  // }

  // if (typeofwindow !== undefined) {
  //   return "";
  // }

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    //로그인처리 어떻게 하셨나요?
    //프론트에서 로그인해서 받은 엑세스 토큰  http  headers 리퀘스트에  authorization에 Bearer타입으로 엑세스토큰
    // headers: { authorization: "Bearer 액세스토큰" },
    headers: { authorization: `Bearer ${accessToken}` },
  });

  //임시로 썼음
  // headers: {
  //   authorization: `Bearer ${localStorage.getItem("accessToken")}`;
  // }

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
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
