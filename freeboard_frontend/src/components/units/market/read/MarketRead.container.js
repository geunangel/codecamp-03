import MarketReadUI from "./MarketRead.presenter";
import { FETCH_USEDITEM } from "./MarketRead.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function MarKetRead() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.detail,
    },
  });
  console.log(data);

  return <MarketReadUI data={data} />;
}
