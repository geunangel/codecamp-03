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
import { createUploadLink } from "apollo-upload-client";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCBWVgVujcW9L9PLv3P7bZei2tkPizUaYo",
  authDomain: "codecamp-03-kimgeuna.firebaseapp.com",
  projectId: "codecamp-03-kimgeuna",
  storageBucket: "codecamp-03-kimgeuna.appspot.com",
  messagingSenderId: "284536929147",
  appId: "1:284536929147:web:dc4e45079215717ee71bde",
  measurementId: "G-Y1B1VE34WX",
});

//apollo 세팅
function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />

      {/* ApolloProvider => 모든 파일에서 useQ useM 쓰게 해줌 */}
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
