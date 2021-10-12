import MarketUI from "./MarketWrite.presenter";
import { CREATE_USEDITEM } from "./MarketWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { schema } from "./MarketWrite.validations";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Market() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  console.log(formState);

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

  return (
    <MarketUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}
