import Head from "next/head";
import { gql, request } from "graphql-request";

export default function MarketsPage(props) {
  //받아와서 아래에다가 씀
  //   props.fetchUseditem.name;
  //   props.fetchUseditem.remarks;
  //   props.fetchUseditem.images[0];

  return (
    <>
      <Head>
        {/* <meta property="og:title" content="동적으로 받은 title" />
        <meta property="og:description" content="동적으로 받은 description" />
        <meta property="og:image" content="동적으로 받은 image" /> */}

        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta property="og:image" content={props.fetchUseditem.images[0]} />
      </Head>
      <div>마켓페이지 입니다.</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

//먼저 작업됨. 그다음 위에 MarketsPage가 실행됨.
//nextjs에서 getServerSideProps 지정한이름. 바꿀 수 없음.
export const getServerSideProps = async (context) => {
  //1.gtaphql 데이터를 요청한다.
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    { useditemId: context.query.useditemId }
  );

  //2.요청박은 데이터를 페이지로 넘겨준다
  //페이지로 넘길때 반드시 props를 적어야함.
  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
