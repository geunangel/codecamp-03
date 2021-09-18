import { Wrapper, LayoutNavigaition } from "./LayoutNavigaition.styles";

export default function LayoutNaigaitionUI(props) {
  return (
    <Wrapper>
      <LayoutNavigaition onClick={props.onClickBoardList}>
        자유게시판
      </LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        장비마켓
      </LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClickMypage}>
        마이페이지
      </LayoutNavigaition>
      <LayoutNavigaition>Q&A</LayoutNavigaition>
      <LayoutNavigaition>FAQ</LayoutNavigaition>
    </Wrapper>
  );
}
