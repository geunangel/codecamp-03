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
                <SellerName>{props.data?.fetchUseditem.seller.name}</SellerName>
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
              {props.isPicked ? (
                <LikeIcon src="" onClick={props.onClickPick} />
              ) : (
                <LikeIcon src="" onClick={props.onClickPick} />
              )}
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
                    <Slider_Img></Slider_Img>
                  )}
                </div>
                <div>
                  {props.data?.fetchUseditem.images[1] ? (
                    <SliderImg
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
              {props.data?.fetchUseditem.tags.length ? (
                <>
                  <div>
                    {props.data?.fetchUseditem.tags[0]?.split("")[0] === "#" ? (
                      props.data?.fetchUseditem.tags[0]
                    ) : (
                      <div>#{props.data?.fetchUseditem.tags[0]}</div>
                    )}
                  </div>
                  <div>
                    {props.data?.fetchUseditem.tags[1]?.split("")[0] === "#" ? (
                      props.data?.fetchUseditem.tags[1]
                    ) : (
                      <div>#{props.data?.fetchUseditem.tags[1]}</div>
                    )}
                  </div>
                  <div>
                    {props.data?.fetchUseditem.tags[2]?.split("")[0] === "#" ? (
                      props.data?.fetchUseditem.tags[2]
                    ) : (
                      <div>#{props.data?.fetchUseditem.tags[2]}</div>
                    )}
                  </div>
                </>
              ) : (
                <div></div>
              )}
            </Tag>
          </TagBox>
          <Line />
          <MapBox>
            <Map id="map"></Map>
          </MapBox>
        </Body>
      </Wrapper>
      <ButtonBox>
        {props.data?.fetchUseditem.seller.email ===
        props.userdata?.fetchUserLoggedIn.email ? (
          <>
            <ButtonList onClick={props.onClickList}>목록으로</ButtonList>
            <BottonEdit onClick={props.onClickIsEdit}>수정하기</BottonEdit>
            <button onClick={props.onClickDelete}>삭제하기</button>
          </>
        ) : (
          <>
            <ButtonList onClick={props.onClickList}>목록으로</ButtonList>
            <button onClick={props.onClickPurchase}>구매하기</button>
          </>
        )}
      </ButtonBox>
    </>
  );
}
