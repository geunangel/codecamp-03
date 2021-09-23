import { Wrapper, LayoutNavigaition } from "./LayoutNavigaition.styles";

export default function LayoutNaigaitionUI(props) {
  return (
    <Wrapper>
      <LayoutNavigaition onClick={props.onClick}>All</LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClick}>Wine</LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClick}>Vodka</LayoutNavigaition>
      <LayoutNavigaition onClick={props.onClick}>Beer</LayoutNavigaition>
    </Wrapper>
  );
}
