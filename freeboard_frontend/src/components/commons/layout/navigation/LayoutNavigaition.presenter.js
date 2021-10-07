import { Wrapper, LayoutNavigaition } from "./LayoutNavigaition.styles";

export default function LayoutNaigaitionUI(props) {
  return (
    <Wrapper>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        Market
      </LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        All
      </LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        Wine
      </LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        Vodka
      </LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClickMarketList}>
        Beer
      </LayoutNavigaition>
    </Wrapper>
  );
}
