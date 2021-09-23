import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseeffectPage() {
  const [dogImage, setDogImge] = useState("");

  useEffect(() => {
    //async를 useEffect에다 바로 쓸 수 없기때문에 function을 만들어 async를 넣어줌
    async function getImage() {
      const image = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImge(image.data.message);
    }
    getImage();
  }, []);

  return (
    <>
      <div>오픈 API</div>
      <img src={dogImage} />
    </>
  );
}
