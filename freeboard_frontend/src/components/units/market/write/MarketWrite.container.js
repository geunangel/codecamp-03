import MarketUI from "./MarketWrite.presenter";
import {
  CREATE_USEDITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./MarketWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { schema } from "./MarketWrite.validations";
import { yupResolver } from "@hookform/resolvers/yup";

export default function MarketWrite(props) {
  const router = useRouter();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [tags, setTags] = useState([]);

  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null, null, null]);

  const { handleSubmit, register, formState, setValue, trigger, watch } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    });
  console.log(formState);

  //contents에 라이브러리 적용
  function onChangeMyEditor(value) {
    console.log(value);
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br/></p>" ? "" : value);

    //onChange 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }

  //위치 경도,위도
  function onChangeLAT(value) {
    setValue("lat", value || "");
    trigger("lat");
  }
  function onChangeLNG(value) {
    setValue("len", value || "");
    trigger("lng");
  }

  //태그
  const onChangeTags = (event) => {
    setTags(event.target.value.split(" "));
  };

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
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: imageUrl,
            useditemAddress: {
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      console.log(data);
      alert("등록완료");
      console.log(result.data.createUseditem);
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  //수정
  async function onClickUpdate(data) {
    if (!data.name && !data.remarks && !data.contents && !data.price) {
      alert("수정된 내용이 없습니다.");
      return;
    }
    console.log("update", data);

    try {
      const uploadFiles = files
        .filter((el) => el)
        .map((el) => uploadFile({ variables: { file: el } }));
      const results = await Promise.all(uploadFiles);
      const images = results.map((el) => el.data.uploadFile.url);

      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            useditemAddress: {
              lat: lat,
              lng: lng,
            },
            images: images,
          },
          useditemId: router.query.detail,
        },
      });
      console.log("이동!!!!");
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  //취소
  function onClickCancel() {
    router.push(`/market/${router.query.detail}`);
  }

  //지도
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
          center: new window.kakao.maps.LatLng(37.485148, 126.895113), // 지도의 중심좌표.
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
            // setValue("lat", latlng.La);
            // setValue("lng", latlng.Ma);
            setLat(latlng.getLat());
            setLng(latlng.getLng());
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <MarketUI
      data={props.data}
      isEdit={props.isEdit}
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeFile={onChangeFile}
      onChangeMyEditor={onChangeMyEditor}
      onChangeTags={onChangeTags}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      lng={lng}
      lat={lat}
      contents={watch("contents") || ""}
    />
  );
}
