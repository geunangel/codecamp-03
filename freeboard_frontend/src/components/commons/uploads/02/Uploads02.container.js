import { useState, useRef } from "react";
import Uploads02UI from "./Uploads02.presenter";
import { fileValidation } from "../../../../commons/libraries/validations/checkValidationImage";

export default function Uploads02(props) {
  const fileRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  //이미지 업로드
  function onClickImg() {
    fileRef.current?.click();
  }

  //이미지를 로컬에 저장해서 미리보기로 이용! 이때 내 로컬에서만 보임.
  async function onChangeImg(event) {
    const file = event.target.files?.[0];
    console.log(file);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      props.onChangeFile(file, props.index);
    };
  }
  return (
    <Uploads02UI
      fileRef={fileRef}
      imageUrl={imageUrl}
      onChangeImg={onChangeImg}
      onClickImg={onClickImg}
      register={props.register}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
