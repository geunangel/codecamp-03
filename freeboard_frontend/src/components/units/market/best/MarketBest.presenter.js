import {
  Wrapper,
  BestItem,
  BestImg,
  Best_Img,
  BestTitle,
  BesttitleDetail,
  BestPrice,
  BestPriceLikeBox,
  BestLikeIcon,
  BestLikeCount,
  BestLikeBox,
} from "./MarketBest.styles";

export default function MarketBestUI(props) {
  return (
    <Wrapper>
      {props.bestdata?.fetchUseditemsOfTheBest.map((el) => (
        <BestItem key={el._id} id={el._id} onClick={props.onClickBestUseditem}>
          <div>
            {el.images[0] ? (
              <BestImg src={`https://storage.googleapis.com/${el.images[0]}`} />
            ) : (
              <Best_Img></Best_Img>
            )}
          </div>
          <div>
            <BestTitle>{el.name}</BestTitle>
            <BesttitleDetail>{el.remarks}</BesttitleDetail>
            <BestPrice>{el.price.toLocaleString()}원</BestPrice>
          </div>
          <BestLikeIcon src="./하트.png" />
          {el.pickedCount}
        </BestItem>
      ))}
    </Wrapper>
  );
}
