import { Wrapper, MainImg } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    dots: false, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 3000,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    centerMode: true,
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
  };
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <MainImg src="/캠핑.jpeg" />
          <MainImg src="/취미브이로그.jpeg" />
          <MainImg src="/신상.jpeg" />
          <MainImg src="/신상1.jpeg" />
        </Slider>
      </Wrapper>
    </>
  );
}
