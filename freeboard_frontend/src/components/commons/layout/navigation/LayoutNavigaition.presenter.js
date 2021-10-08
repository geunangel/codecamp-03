import {
  Wrapper,
  LayoutNavigaitionBox,
  LayoutNavigaition,
  Line,
} from "./LayoutNavigaition.styles";

export default function LayoutNaigaitionUI(props) {
  return (
    <Wrapper>
      <Line />
      <LayoutNavigaitionBox>
        <LayoutNavigaition onClick={props.onClickMarketList}>
          최신상품
        </LayoutNavigaition>
        <LayoutNavigaition onClick={props.onClickMarketList}>
          후기
        </LayoutNavigaition>
        <LayoutNavigaition onClick={props.onClickMarketList}>
          추천상품
        </LayoutNavigaition>
        <LayoutNavigaition onClick={props.onClickBoardList}>
          스토리
        </LayoutNavigaition>
      </LayoutNavigaitionBox>
    </Wrapper>
  );
}
