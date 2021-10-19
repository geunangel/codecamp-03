// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { initializeApp } from "firebase/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// import Head from "next/head";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDXffKZN458jg79onQiV0Du8aQCRqjpoK4",
  authDomain: "anywhere-eac97.firebaseapp.com",
  projectId: "anywhere-eac97",
  storageBucket: "anywhere-eac97.appspot.com",
  messagingSenderId: "352996018395",
  appId: "1:352996018395:web:192cc60bffe59662d464fe",
  measurementId: "G-NP4MPSQ70G",

  // apiKey: "AIzaSyCBWVgVujcW9L9PLv3P7bZei2tkPizUaYo",
  // authDomain: "codecamp-03-kimgeuna.firebaseapp.com",
  // projectId: "codecamp-03-kimgeuna",
  // storageBucket: "codecamp-03-kimgeuna.appspot.com",
  // messagingSenderId: "284536929147",
  // appId: "1:284536929147:web:dc4e45079215717ee71bde",
  // measurementId: "G-Y1B1VE34WX",
});

//apollo 세팅
export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // accessToken 임시로 저장
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);

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
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    //credentials=>중요한 정보를 포함시켜달라고 적어야함
    credentials: "include",
  });

  const client = new ApolloClient({
    //from([])안에 넣을때 순서 중요!!!
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  // function MyApp({ Component, pageProps }) {
  //   const uploadLink = createUploadLink({
  //     uri: "http://backend03.codebootcamp.co.kr/graphql",
  //   });

  //   const client = new ApolloClient({
  //     link: ApolloLink.from([uploadLink]),
  //     cache: new InMemoryCache(),
  //   });

  return (
    <>
      {/* <Head> */}
      {/* 1번째. 다운로드 후 브라우저에 저장 */}
      {/* <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e2564702d8f2d72a864d71d0c7163c5c"
        ></script> */}
      {/* </Head> */}
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />

        {/* ApolloProvider => 모든 파일에서 useQ useM 쓰게 해줌 */}
        {/* client={client} setting했기 때문에 사용할 수 있음 지우면 사용 못함. */}
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
