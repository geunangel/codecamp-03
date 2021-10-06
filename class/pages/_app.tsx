// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { initializeApp } from "firebase/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

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
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  }, []);
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
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
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />

        {/* ApolloProvider => 모든 파일에서 useQ useM 쓰게 해줌 */}
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
