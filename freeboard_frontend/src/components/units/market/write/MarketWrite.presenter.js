import {
  Wrapper,
  MainTitle,
  ProductBox,
  Product,
  ProductContents,
  ProductContentsBox,
  ButtonProduct,
  AddressBox,
  AddressImgBox,
  AddressImg,
  AddressInputBox,
  AddressInput1,
  AddressInput2,
  AddressGPSInputBox,
  ProductImg,
  AddressGPS,
} from "./MarketWrite.styles";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Wrapper>
        <MainTitle>상품 등록하기</MainTitle>
        <ProductBox>
          <Product>상품명</Product>
          <ProductContents
            type="text"
            placeholder="상품명을 작성해주세요."
            {...props.register("name")}
          />
        </ProductBox>
        <ProductBox>
          <Product>한줄요약</Product>
          <ProductContents
            type="text"
            placeholder="상품명을 작성해주세요."
            {...props.register("remarks")}
          />
        </ProductBox>
        <ProductContentsBox>
          <Product
            placeholder="상품을 설명해주세요.."
            {...props.register("contents")}
          />
        </ProductContentsBox>
        <div>
          <Product>상품설명</Product>
          <ReactQuill onChange={props.onChangeMyEditor} />
        </div>
        <ProductBox>
          <Product>판매가격</Product>
          <ProductContents
            type="text"
            placeholder="판매가격을 입력해주세요."
            {...props.register("price")}
          />
        </ProductBox>
        <ProductBox>
          <Product>태그입력</Product>
          <ProductContents
            type="text"
            placeholder="#태그 #태그 #태그"
            {...props.register("tags")}
          />
        </ProductBox>
        <AddressBox>
          <AddressImgBox>
            <Product>거래위치</Product>
            <AddressImg src="" />
          </AddressImgBox>
          <AddressGPSInputBox>
            <div>
              <Product>GPS</Product>
              <AddressGPS placeholder="위도(LAT)" />
              <img />
              <AddressGPS placeholder="경도(LNG)" />
            </div>
            <AddressInputBox>
              <Product>주소</Product>
              <AddressInput1 />
              <AddressInput2 />
            </AddressInputBox>
          </AddressGPSInputBox>
        </AddressBox>
        <div>
          <Product>사진 첨부</Product>
          <ProductImg src="" />
          <ProductImg src="" />
        </div>
        <div>
          <Product>메일 사진 설정</Product>
          <input type="radio" />
          사진 1
          <input type="radio" />
          사진 2
        </div>
        <ButtonProduct type="submit" onClick={props.onClickSubmit}>
          등록하기
        </ButtonProduct>
      </Wrapper>
    </form>
  );
}
