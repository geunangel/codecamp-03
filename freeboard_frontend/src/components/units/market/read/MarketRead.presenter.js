import {
  Wrapper,
  Header,
  SellerBox,
  SellerUser,
  UserImg,
  UserBox,
  IconBox,
  SellerName,
  DayDate,
  IconLink,
  IconMap,
  Body,
  TitleBox,
  MainTitle,
  Tile1,
  Tile2,
  LikeBox,
  LikeIcon,
  LikeCount,
  Price,
  MainImgBox,
  MainImg,
  ContentsBox,
  Contents,
  TagBox,
  Tag,
  MapBox,
  Map,
  ButtonBox,
  ButtonList,
  BottonEdit,
  Line,
} from "./MarketRead.styles";
export default function MarketDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Header>
          <SellerBox>
            <SellerUser>
              <UserImg src="" />
              <UserBox>
                <SellerName>판매자</SellerName>
                <DayDate>Date : </DayDate>
              </UserBox>
            </SellerUser>
          </SellerBox>
          <IconBox>
            <IconLink src="" />
            <IconMap src="" />
          </IconBox>
        </Header>
        <Line />
        <Body>
          <TitleBox>
            <MainTitle>
              <Tile1>{props.data?.fetchUseditem.remarks}</Tile1>
              <Tile2>{props.data?.fetchUseditem.name}</Tile2>
            </MainTitle>
            <LikeBox>
              <LikeIcon src="" />
              <LikeCount>{props.data?.fetchUseditem.pickedCount}</LikeCount>
            </LikeBox>
          </TitleBox>
          <Price>{props.data?.fetchUseditem.price} 원</Price>
          <MainImgBox>
            <MainImg>물품사진</MainImg>
          </MainImgBox>
          <ContentsBox>
            <Contents>{props.data?.fetchUseditem.contents}</Contents>
          </ContentsBox>
          <TagBox>
            <Tag>{props.data?.fetchUseditem.tags}</Tag>
          </TagBox>
          <Line />
          <MapBox>
            <Map>맵</Map>
          </MapBox>
        </Body>
      </Wrapper>
      <ButtonBox>
        <ButtonList />
        <BottonEdit />
      </ButtonBox>
      <button>목록으로</button>
    </>
  );
}
