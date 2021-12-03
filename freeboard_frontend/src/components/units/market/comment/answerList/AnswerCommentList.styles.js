import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 1200px;
  /* border-bottom: 1px solid #bdbdbd; */
  margin-top: 40px;
`;

export const CommentList = styled.div`
  width: 1200px;
  display: flex;
`;

export const CommentWriterImgBox = styled.div`
  display: flex;
  /* align-items: center; */
  width: 5%;
`;

export const CommentWriterImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const WriterContentsBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const CommentWriter = styled.div`
  display: flex;
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const CommentListIsEditBox = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  width: 8%;
`;

export const CommentIsEditButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CommentDeleteButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const CommentDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
  margin-left: 60px;
`;
