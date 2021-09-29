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

// function MyApp({ Component, pageProps }: AppProps)
function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
