import {
  Wrapper,
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

export default function MarketListUI(props) {
  return (
    <Wrapper>
      {/* <BestItem>
        <BestImg src="" />
        <BestTitle>제품이름</BestTitle>
        <BesttitleDetail>detail</BesttitleDetail>
        <BestPriceLikeBox>
          <BestPrice>1,000,000원</BestPrice>
          <BestLikeBox>
            <BestLikeIcon src="./하트.png" />
            <BestLikeCount>100</BestLikeCount>
          </BestLikeBox>
        </BestPriceLikeBox>
      </BestItem> */}
      <ProductBox>
        <div>
          <div>판매중상품</div>
          <div>판매된상품</div>
        </div>
        {/* <div>
          <img src="./위치모양.svg" width="20px" height="20px" />
          <input type="text" placeholder="제품을 검색해주세요." />
          <div>날짜</div>
          <button>검색</button>
        </div> */}
      </ProductBox>
      <hr />
      {props.data?.fetchUseditems.map((el) => (
        <div key={el._id} id={el._id} onClick={props.onClickPage}>
          {el.images[0] ? (
            <img
              src={`https://storage.googleapis.com/${el.images[0]}`}
              style={{ width: 100, height: 100 }}
            />
          ) : (
            <img src="" />
          )}
          <div>
            <div>{el.name}</div>
            <div>{el.remarks}</div>
            <div>
              <div>태그</div>
            </div>
            <div>
              <img src="./사람.png" />
              <div>판매자</div>
              <div>하뚜</div>
              <div>{el.pickedCount}</div>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
