import MarketRead from "../../../src/components/units/market/read/MarketRead.container";
import MarketCommentWriter from "../../../src/components/units/market/comment/writer/MarketCommentWriter.container";
import MarketCommentList from "../../../src/components/units/market/comment/list/MarketCommentList.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      user {
        name
      }
      contents
    }
  }
`;

export default function Market() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.detail },
  });
  return (
    <>
      <MarketRead />
      <MarketCommentWriter />
      {data?.fetchUseditemQuestions.map((el) => (
        <MarketCommentList key={el._id} el={el} />
      ))}
    </>
  );
}
