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
  SliderImg,
  Slider_Img,
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
import Dompurify from "dompurify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 5000,
};

export default function MarketDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Header>
          <SellerBox>
            <SellerUser>
              <UserImg src="" />
              <UserBox>
                <SellerName>
                  {props.data?.fetchUseditem.seller?.name}
                </SellerName>
                <DayDate>
                  Date :{props.data?.fetchUseditem.createdAt.slice(0, 10) + " "}
                  {props.data?.fetchUseditem.createdAt.slice(11, 19)}{" "}
                </DayDate>
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
          <Price>
            {props.data?.fetchUseditem.price.toLocaleString("ko-KR")} 원
          </Price>
          <MainImgBox>
            <MainImg>
              <Slider {...settings}>
                <div>
                  {props.data?.fetchUseditem.images[0] ? (
                    <SliderImg
                      src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
                    />
                  ) : (
                    <SliderImg></SliderImg>
                  )}
                </div>
                <div>
                  {props.data?.fetchUseditem.images[1] ? (
                    <SliderImage
                      src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`}
                    />
                  ) : (
                    <Slider_Img></Slider_Img>
                  )}
                </div>
              </Slider>
            </MainImg>
          </MainImgBox>
          <ContentsBox>
            {process.browser && (
              <Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              />
            )}
          </ContentsBox>
          <TagBox>
            <Tag>
              <div>{props.data?.fetchUseditem.tags[0]}</div>
              <div>{props.data?.fetchUseditem.tags[1]}</div>
              <div>{props.data?.fetchUseditem.tags[2]}</div>
            </Tag>
          </TagBox>
          <Line />
          <MapBox>
            <Map id="map"></Map>
          </MapBox>
        </Body>
      </Wrapper>
      <ButtonBox>
        <ButtonList />
        <BottonEdit />
      </ButtonBox>
      <button onClick={props.onClickList}>목록으로</button>
      <button onClick={props.onClickIsEdit}>수정하기</button>
      <button onClick={props.onClickDelete}>삭제하기</button>
    </>
  );
}
