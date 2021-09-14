import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid magenta;
`;

export default function LibraryYoutubePage() {
  return (
    //사이즈는 안에서만 가능함
    //https://www.npmjs.com/package/react-player 설명창고!!!
    <MyYoutube
      ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={450}
      height={500}
    />
  );
}
