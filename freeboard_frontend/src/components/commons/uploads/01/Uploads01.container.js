import { useState, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import { checkValidationImage } from "../../../../commons/libraries/validations/checkValidationImage";

export default function Uploads01(props) {
  const fileRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  //이미지 업로드
  function onClickImg() {
    fileRef.current?.click();
  }

  //이미지 업로드
  async function onChangeImg(event) {
    const file = checkValidationImage(event.target.files?.[0]);
    console.log(file);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      // props.onChangeFiles(file, props.index);
    };
  }
  return (
    <Uploads01UI
      fileRef={fileRef}
      imageUrl={imageUrl}
      onChangeImg={onChangeImg}
      onClickImg={onClickImg}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
