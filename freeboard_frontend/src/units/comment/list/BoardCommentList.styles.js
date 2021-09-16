import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapeer = styled.div`
  width: 1200px;
  height: 128px;
  border-bottom: 1px solid gray;
  padding-top: 20px;
`;
export const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentImg = styled.img`
  width: 48px;
  height: 48px;
`;
export const CommentName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const CommentDtailBox = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const CommentStarBox = styled.div``;
export const CommentStar = styled(Rate)``;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const CommentContents = styled.div``;

export const CommentDate = styled.div`
  color: gray;
  padding-top: 15px;
  padding-left: 60px;
`;
