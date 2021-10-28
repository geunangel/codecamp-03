import MarketBest from "../../../src/components/units/market/best/MarketBest.container";
import TodayView from "../../../src/components/units/market/todayview/Todayview.container";
// import styled from "@emotion/styled";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

export default function MarketBestPage() {
  return (
    <>
      <MarketBest />
      <TodayView />
    </>
  );
}
