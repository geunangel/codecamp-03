import { Wrapper, MainImg } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 3000,
    autoplay: true, //자동으로 할건지
    autoplaySpeed: 4000, // 넘어가는 속도
    slidesToShow: 1, // 1장씩 보이게
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div>
            <MainImg src="./마이크.jpeg" />
            <button>게임시작하기</button>
          </div>
          <div>
            <div>라이브퐝퐝 이벤트</div>
            <div>장비사면 게임 공짜!!!!!!</div>
            <div>가격 상관없이 동일하게 적용됩니다.</div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <MainImg src="./마이크.jpeg" />
          </div>
          <div>
            <MainImg src="./마이크.jpeg" />
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
