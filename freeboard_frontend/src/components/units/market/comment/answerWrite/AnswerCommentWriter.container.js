import AnswerCommentWriterUI from "./AnswerCommentWriter.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  // UPDATE_USEDITEM_QUESTION,
} from "./AnswerCommentWriter.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MarketCommentWrite(props) {
  const router = useRouter();

  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  // const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);

  const onChangeCommentContents = (event) => {
    setContents(event.target.value);
  };

  const onClickComment = () => {
    createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: router.query.detail,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.detail },
        },
      ],
    });
    console.log(router.query.detail);
  };

  return (
    <AnswerCommentWriterUI
      onChangeCommentContents={onChangeCommentContents}
      onClickComment={onClickComment}
    />
  );
}
