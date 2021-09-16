import styled from "@emotion/styled";
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

export const PageIconBox = styled.div`
  display: flex;
`;
export const LeftPageIcon = styled(LeftOutlined)``;
export const RightPageIcon = styled(RightOutlined)``;
export const LeftLeftPageIcon = styled(DoubleLeftOutlined)``;
export const RightRightPageIcon = styled(DoubleRightOutlined)``;
export const Page = styled.div`
  margin: 10px;
`;
export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 208px;
  height: 42px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const BestBoards = styled.div`
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const BoardsImg = styled.div`
  width: 282px;
  height: 120px;
  border-radius: 20px 20px 0px 0px;
  background-color: gray;
`;

export const BoardTitle = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  height: 27px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const WriterBoardBox = styled.div``;

export const WriterBox = styled.div``;

export const WriterImg = styled.div``;

export const WriterName = styled.div``;

export const BoardListBox = styled.div`
  width: 1200px;
  height: 583px;
  display: flex;
  flex-direction: column;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

export const BoardListTop = styled.div`
  height: 52px;
  line-height: 52px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbdbd;
`;

export const BoardListNumber = styled.div`
  text-align: center;
  width: 120px;
  height: 27px;
  font-weight: 500;
  font-size: 18px;
`;

export const BoardListTitle = styled.div`
  text-align: center;
  width: 600px;
  height: 27px;
  font-weight: 500;
  font-size: 18px;
`;

export const BoardListwriter = styled.div`
  text-align: center;
  width: 200px;
  height: 27px;
  font-weight: 500;
  font-size: 18px;
`;

export const BoardLisDay = styled.div`
  text-align: center;
  width: 300px;
  height: 27px;
  font-weight: 500;
  font-size: 18px;
`;

export const BoardListBottom = styled.div`
  width: 1200px;
  height: 530px;
  display: flex;
  flex-direction: column;
`;

export const BoardListBottom2 = styled.div`
  width: 1200px;
  height: 53px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbdbd;
`;

export const BoardListNumber2 = styled.div`
  text-align: center;
  width: 120px;
  height: 27px;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const BoardListTitle2 = styled.div`
  text-align: center;
  width: 600px;
  height: 27px;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const BoardListwriter2 = styled.div`
  text-align: center;
  width: 200px;
  height: 27px;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const BoardLisDay2 = styled.div`
  text-align: center;
  width: 300px;
  height: 27px;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;
