import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const CommentBox = styled.div``;

export const CommentIcon = styled.img``;

export const CommentText = styled.span`
  font-weight: bold;
  padding-left: 10px;
`;

export const CommentData = styled.div``;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
`;

export const CommentPw = styled.input`
  width: 180px;
  height: 52px;
`;

export const CommentStar = styled.span``;

export const CommentContentsBox = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid lightgray;
`;

export const CommentContents = styled.textarea`
  width: 1200px;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const LengthButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonComment = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
