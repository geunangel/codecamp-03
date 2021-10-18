import { useState, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";

export default function Uploads01(props) {
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
    if (!file) {
      return alert("파일이 없습니다.");
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한: 5MB");
      return;
    }
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      props.onChangeFiles(file, props.index);
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
