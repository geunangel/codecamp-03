import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1847px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  /* background-color: gray; */
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 50px;
  /* background-color: red; */
`;

export const WriterPasswordBox = styled.div`
  width: 996px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: orange; */
`;

export const WriterBox = styled.div`
  width: 486px;
  height: 100px;

  /* background-color: yellow;     */
`;
export const WriterName = styled.div`
  width: 45px;
  height: 24px;
  font-size: 16px;
`;

export const WriterText = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  /* background-color: green; */
`;

export const PasswordBox = styled.div`
  width: 486px;
  height: 100px;
  /* background-color: yellow;    */
`;

export const PasswordName = styled.div`
  width: 59px;
  height: 24px;
  font-size: 16px;
`;

export const PasswordText = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  /* background-color: green; */
`;

export const TitleBox = styled.div`
  width: 996px;
  height: 100px;
  /* background-color: red; */
`;

export const TitleName = styled.div`
  width: 45px;
  height: 24px;
  font-size: 16px;
`;

export const TitleText = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  /* background-color: magenta; */
`;

export const ContentsBox = styled.div`
  width: 996px;
  height: 600px;
  /* background-color: maroon; */
`;

export const ContentsName = styled.div`
  width: 45px;
  height: 24px;
  font-size: 16px;
`;
export const ContentsText = styled.textarea`
  width: 996px;
  height: 500px;
  border: 1px solid #bdbdbd;
  /* background-color: mediumblue; */
`;

export const AddressBox = styled.div`
  width: 996px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: mediumpurple; */
`;

export const AddressSearchBox = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const AddressName = styled.div`
  width: 59px;
  height: 24px;
  font-size: 16px;
`;

export const ButtonAddress = styled.div`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
`;

export const AddressText = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const YoutubeBox = styled.div`
  width: 996px;
  height: 100px;
  /* background-color: mediumpurple; */
`;

export const YoutubeName = styled.div`
  width: 59px;
  height: 24px;
  font-size: 16px;
`;

export const YoutubeText = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const ImgBox = styled.div`
  width: 996px;
  height: 120px;
  display: flex;
  flex-direction: column;
  /* background-color: gray; */
`;

export const ImgTitle = styled.div`
  width: 78px;
  height: 78px;
`;

export const ImgUploadBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  /* background-color: mediumturquoise; */
`;

export const ImgUpload = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #bdbdbd;
`;

export const ImgText = styled.div``;

export const MainBox = styled.div`
  padding-top: 30px;
  width: 996px;
  height: 100px;

  /* background-color: navajowhite; */
`;

export const MainName = styled.div`
  width: 59px;
  height: 24px;
  font-size: 16px;
`;

export const MainCheck = styled.input``;

export const ButtonEnrollent = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props) =>
    props.buttoncolor === true ? "#ffd600" : "gray"};
`;

export const Error = styled.div`
  color: red;
`;
