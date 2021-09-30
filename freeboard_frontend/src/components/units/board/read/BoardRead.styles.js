import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1602px; */
  /* background-color: white; */
`;

export const Detail = styled.div`
  width: 1200px;
  /* height: 1602px; */
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(102, 51, 051, 0.5);
`;

export const Header = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  /* background-color: blueviolet; */
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px black;
`;

export const Footer = styled.div`
  width: 100%;
  /* background-color: palegoldenrod; */
`;
export const WriterImg = styled.img``;

export const WriterName = styled.div`
  font-style: normal;
  font-size: 24px;
  line-height: 36px;
`;

export const Head1 = styled.div`
  width: 300px;
  height: 160px;
  /* background-color: palevioletred; */
  display: flex;
  align-items: flex-end;
`;

export const Head2 = styled.div`
  width: 500px;
  height: 160px;
  /* background-color: palevioletred; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Title = styled.div`
  height: 36px;
  line-height: 53px;
  font-weight: bold;
  /* background-color: blue; */
  font-size: 40px;
  margin-top: 80px;
`;

export const Img = styled.img`
  width: 996px;
  height: 480px;
  /* background-color: black; */
  /* background-image: url("/좀비손.png"); */
  margin-top: 40px;
`;

export const Contents = styled.div`
  width: 996px;
  height: 96px;
  background-color: lightgray;
  margin-top: 40px;
`;

export const Youtube = styled.div`
  /* background-image: url("/video.png"); */
  /* background-color: gray; */
  margin-top: 120px;
`;

export const Likedislike = styled.div`
  width: 100px;
  height: 50px;
  /* background-color: crimson; */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 163px;
`;

export const Likecount = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Like = styled.div`
  width: 20px;
  height: 18px;
  background-image: url("/좋아요.png");
`;

export const Count = styled.div`
  width: 40px;
  height: 27px;
`;

export const Dislikecount = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Dislike = styled.div`
  width: 22px;
  height: 20px;
  background-image: url("/싫어요.png");
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  margin-top: 60px;
`;

export const ButtonList = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;
  font-weight: 24px;
`;

export const ButtonEdit = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;
  font-weight: 24px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ButtonDelete = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;
  font-weight: 24px;
`;
