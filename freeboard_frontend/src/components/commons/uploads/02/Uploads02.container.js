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

  //이미지 업로드
  async function onChangeImg(event) {
    const file = event.target.files?.[0];
    console.log(file);
    if (!fileValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      props.onChangeFiles(file, props.index);
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
