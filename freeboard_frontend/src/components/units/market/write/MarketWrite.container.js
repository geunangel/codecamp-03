import MarketUI from "./MarketWrite.presenter";
import {
  CREATE_USEDITEM,
  FETCH_USEDITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./MarketWrite.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { schema } from "./MarketWrite.validations";
import { yupResolver } from "@hookform/resolvers/yup";

export default function MarketWrite(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null, null]);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  console.log(formState);

  //이미지
  function onChangeFile(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  //등록
  async function onClickSubmit(data) {
    try {
      const uploadFiles = files
        .filter((el) => el)
        .map((el) =>
          uploadFile({
            variables: { file: el },
          })
        );
      const results = await Promise.all(uploadFiles);
      const imageUrl = results.map((el) => el?.data.uploadFile.url || "");

      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data, images: imageUrl },
        },
      });
      console.log(data);
      alert("등록완료");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  //contents에 라이브러리 적용
  function onChangeMyEditor(value) {
    console.log(value);
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br/></p>" ? "" : value);

    //onChange 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }

  //수정
  function onClickUpdate(data) {
    updateUseditem({
      variables: {
        updateUseditemInput: { ...data },
        useditemId: router.query.detail,
      },
    });
    router.push(`/market/detail/${router.query.detail}`);
  }

  function onClickCancel() {
    router.push(`/market/detail/${router.query.detail}`);
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3b50eb6bcb79315da55039f6461203ef";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

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
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;
            console.log(latlng);
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <MarketUI
      data={data}
      isEdit={props.isEdit}
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeFile={onChangeFile}
      onChangeMyEditor={onChangeMyEditor}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
    />
  );
}
