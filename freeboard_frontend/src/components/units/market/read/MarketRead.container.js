import MarketReadUI from "./MarketRead.presenter";
import { FETCH_USED_ITEM } from "./MarketRead.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function MarKetRead() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.detail,
    },
  });
  console.log(router.query);

  //리스트로 이동
  function onClickList() {
    router.push(`/market/list`);
  }

  //수정하기
  function onClickIsEdit() {}

  //삭제하기
  function onClickDelete() {}

  return (
    <MarketReadUI
      data={data}
      onClickList={onClickList}
      onClickIsEdit={onClickIsEdit}
      onClickDelete={onClickDelete}
    />
  );
}
