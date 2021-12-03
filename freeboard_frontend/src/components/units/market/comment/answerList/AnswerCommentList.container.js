import MarketCommentListUI from "./MarketCommentList.presenter";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./MarketCommentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MarketCommentList(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickIsEdit = () => {
    setIsEdit(true);
  };

  const onClickDelete = (event) => {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.detail },
        },
      ],
    });
  };

  return (
    <MarketCommentListUI
      el={props.el}
      data={data}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      onClickIsEdit={onClickIsEdit}
      onClickDelete={onClickDelete}
    />
  );
}
