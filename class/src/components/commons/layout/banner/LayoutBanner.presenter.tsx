import { Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 100,
    autoplay: true, //자동으로 할건지
    autoplaySpeed: 3000, // 넘어가는 속도
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
            <img src="../../../../images/잠티뭉뭉.jpeg" />
          </div>
          <div>
            <img src="../../../../images/미소뭉뭉.jpeg" />
          </div>
          <div>
            <img src="../../../../images/졸린뭉뭉.jpeg" />
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
