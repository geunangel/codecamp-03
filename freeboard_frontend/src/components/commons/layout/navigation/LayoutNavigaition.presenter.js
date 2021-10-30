import {
  Wrapper,
  LayoutNavigaitionBox,
  LayoutNavigaitionTitle,
  Line,
} from "./LayoutNavigaition.styles";
// import LayoutNavigaitionTitle from "../../../commons/LayoutNavigaitionTitle";

export default function LayoutNaigaitionUI(props) {
  return (
    <>
      <Wrapper>
        <Line />
        <LayoutNavigaitionBox>
          <LayoutNavigaitionTitle onClick={props.onClickMarketNew}>
            판매하기
          </LayoutNavigaitionTitle>
          <LayoutNavigaitionTitle onClick={props.onClickMarketList}>
            최신상품
          </LayoutNavigaitionTitle>
          <LayoutNavigaitionTitle onClick={props.onClickMarketBest}>
            베스트상품
          </LayoutNavigaitionTitle>
          <LayoutNavigaitionTitle onClick={props.onClickMarketList}>
            후기
          </LayoutNavigaitionTitle>
          <LayoutNavigaitionTitle onClick={props.onClickBoardList}>
            스토리
          </LayoutNavigaitionTitle>
        </LayoutNavigaitionBox>
      </Wrapper>
    </>
  );
}
