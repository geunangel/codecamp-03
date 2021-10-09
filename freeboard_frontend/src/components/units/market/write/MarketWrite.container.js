import MarketUI from "./MarketWrite.presenter";
import { CREATE_USEDITEM } from "./MarketWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function Market() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);

  async function onClickSubmit(data) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data },
        },
      });
      console.log(data);
      alert("등록완료");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  return <MarketUI onClickSubmit={onClickSubmit} />;
}
