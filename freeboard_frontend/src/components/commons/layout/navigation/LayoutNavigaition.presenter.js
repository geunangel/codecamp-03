import { Wrapper, LayoutNavigaition, Search } from "./LayoutNavigaition.styles";

export default function LayoutNaigaitionUI(props) {
  return (
    <Wrapper>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        Market
      </LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        FreeBoard
      </LayoutNavigaition>
      <LayoutNavigaition>
        <Search placeholder="검색해보세요" />
      </LayoutNavigaition>
    </Wrapper>
  );
}
