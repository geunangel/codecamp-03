import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";
import { WithAuth } from "../../../src/components/commons/hocs/WithAuth";

const MarketNew = (props) => {
  return <MarketWrite />;
};
export default WithAuth(MarketNew);
