import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "상품명은 최소 1자 이상입니다.")
    .max(20, "상품명은 최대 20자 까지입니다.")
    .required("상품명을 반드시 입력해주세요."),
  remarks: yup
    .string()
    .min(1, "한줄요약은 최소 1자 이상입니다.")
    .max(30, "한줄요약은 최대 30자 까지입니다.")
    .required("한줄요약을 반드시 입력해주세요."),
  contents: yup
    .string()
    .min(1, "상품설명은 최소 1자 이상입니다.")
    .max(500, "상품설명은 최대 500자 까지입니다.")
    .required("상품설명을 반드시 입력해주세요."),
  price: yup
    .number()
    .typeError("판매가격은 숫자를 입력해주세요.")
    .positive("판매가격은 1이상 적어주세요..")
    .required("판매가격을 반드시 입력해주세요."),
  // tags: yup.string(),
  // images: yup.string(),
});
