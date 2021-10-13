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

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
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

  function onChangeMyEditor(value) {
    console.log(value);
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br/></p>" ? "" : value);

    //onChange 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }

  return (
    <MarketUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeMyEditor={onChangeMyEditor}
    />
  );
}
