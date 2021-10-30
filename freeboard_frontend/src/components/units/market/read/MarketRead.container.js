import MarketReadUI from "./MarketRead.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USER_LOGGED_IN,
} from "./MarketRead.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function MarKetRead() {
  const router = useRouter();

  const [isPicked, setIsPicked] = useState(true);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.detail,
    },
  });
  console.log(router.query);

  const { data: userdata } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: pickeddata } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  // useEffect(() => {
  //   for (let i = 0; i < pickeddata?.fetchUseditemsIPicked.length; i++) {
  //     if (pickeddata?.fetchUseditemsIPicked[i]._id === router.query.detail) {
  //       setIsPicked(true);
  //       break;
  //     } else {
  //       setIsPicked(false);
  //     }
  //   }
  // }, [pickeddata]);

  useEffect(() => {
    console.log("data", data?.fetchUseditem);
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f2400c45d63389ba72ae0f127645b6ec&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat || 37.485155689411144,
            data?.fetchUseditem.useditemAddress?.lng || 126.89519472508692
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
          // draggable: false,
        };

        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(map, "click");
      });
    };
  }, [
    data?.fetchUseditem.useditemAddress?.lat,
    data?.fetchUseditem.useditemAddress?.lng,
  ]);

  //찜
  const onClickPick = async () => {
    const result = await toggleUseditemPick({
      variables: { useditemId: router.query.detail },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.detail },
        },
      ],
    });
    setIsPicked((prev) => !prev);
  };

  //리스트로 이동
  const onClickList = () => {
    router.push(`/market/list`);
  };

  //수정하기
  const onClickIsEdit = () => {
    router.push(`/market/${router.query.detail}/edit`);
  };

  //삭제하기
  const onClickDelete = () => {
    deleteUseditem({
      variables: {
        useditemId: router.query.detail,
      },
    });
    router.push("/market/list");
  };

  //구매하기
  const onClickPurchase = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.detail,
        },
      });
      alert("구매가 완료되었습니다");
      router.push(`/mypage/mypoint`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <MarketReadUI
      isPicked={isPicked}
      data={data}
      userdata={userdata}
      pickeddata={pickeddata}
      onClickList={onClickList}
      onClickIsEdit={onClickIsEdit}
      onClickDelete={onClickDelete}
      onClickPurchase={onClickPurchase}
      onClickPick={onClickPick}
    />
  );
}
