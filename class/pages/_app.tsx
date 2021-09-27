// import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCBWVgVujcW9L9PLv3P7bZei2tkPizUaYo",
  authDomain: "codecamp-03-kimgeuna.firebaseapp.com",
  projectId: "codecamp-03-kimgeuna",
  storageBucket: "codecamp-03-kimgeuna.appspot.com",
  messagingSenderId: "284536929147",
  appId: "1:284536929147:web:dc4e45079215717ee71bde",
  measurementId: "G-Y1B1VE34WX",
});

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
