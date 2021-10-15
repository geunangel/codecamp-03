// import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  //3번째. useEffect=> 다 그리고나면 실행
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e2564702d8f2d72a864d71d0c7163c5c";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        // const map = new kakao.maps.Map(node, options);
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표. 중심지도를 바꾸면 위치 바꿀 수 있음.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log(map);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            // message += '경도는 ' + latlng.getLng() + ' 입니다';

            // var resultDiv = document.getElementById('clickLatlng');
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

  return (
    <>
      {/* Head부분 _app.tsx로 옮기면 버튼에 넣었을때 실행이 느려서 전체 바로 부르게 하기 위해서 */}
      {/* <Head> */}
      {/* 1번째. 다운로드 후 브라우저에 저장 */}
      {/* <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e2564702d8f2d72a864d71d0c7163c5c"
        ></script> */}
      {/* </Head> */}
      {/* 2번째. 빈 div태그 만들기 */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      {/* 빈 div태그에 지도 추가하기 */}
    </>
  );
}
