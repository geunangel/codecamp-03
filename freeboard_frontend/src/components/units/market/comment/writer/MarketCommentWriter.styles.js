import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const Line = styled.div`
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentTitleBox = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;

export const CommentTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentTitleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const CommentTitleText = styled.div`
  font-size: 16px;
`;

export const CommentContentsBox = styled.div`
  /* width: 1200px;
    height: 161px;
    border: 1px solid #BDBDBD; */
`;

export const CommentContentsInput = styled.input`
  width: 1200px;
  height: 110px;
  border: none;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
  border-bottom: 1px solid #f2f2f2;
  padding: 20px;
`;

export const CommentButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
`;

export const CommentTextLength = styled.div``;

export const CommentButton = styled.button`
  width: 91px;
  height: 52px;
  border: none;
  background-color: black;
  color: white;
`;
