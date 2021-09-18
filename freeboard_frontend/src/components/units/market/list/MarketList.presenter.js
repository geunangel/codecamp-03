import {
  Wrapper,
  Header,
  BestItem,
  BestImg,
  BestTitle,
  BesttitleDetail,
  BestPrice,
  BestPriceLikeBox,
  BestLikeIcon,
  BestLikeCount,
  BestLikeBox,
  ProductBox,
} from "./MarketList.styles";

export default function MarketListPresenter() {
  return (
    <Wrapper>
      <Header>베스트 상품</Header>
      <BestItem>
        <BestImg src="./라이브로고.jpeg" />
        <BestTitle>보스마이크</BestTitle>
        <BesttitleDetail>정보</BesttitleDetail>
        <BestPriceLikeBox>
          <BestPrice>1,000,000원</BestPrice>
          <BestLikeBox>
            <BestLikeIcon src="./하트.png" />
            <BestLikeCount>100</BestLikeCount>
          </BestLikeBox>
        </BestPriceLikeBox>
      </BestItem>
      <ProductBox>
        <div>
          <div>판매중상품</div>
          <div>판매된상품</div>
        </div>
        <div>
          <img src="./위치모양.svg" width="20px" height="20px" />
          <input type="text" placeholder="제품을 검색해주세요." />
          <div>날짜</div>
          <button>검색</button>
        </div>
      </ProductBox>
      <hr />
      <div>
        <img src="./라이브로고.jpeg" width="150px" height="150px" />
        <div>
          <div>슈어 마이크 비싼거</div>
          <div>상세정보</div>
          <div>
            <div>태그</div>
          </div>
          <div>
            <img src="./사람.png" />
            <div>판매자</div>
            <div>하뚜</div>
            <div>좋아요숫자</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}