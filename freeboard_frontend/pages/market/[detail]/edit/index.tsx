import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      images
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.detail },
  });

  return <MarketWrite isEdit={true} data={data} />;
}
