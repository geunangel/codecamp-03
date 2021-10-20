import { memo } from "react";

//memo 쓸 경우 부모만 출력하는데
//props로 받아오면 출력이 가능
function MomoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 되었습니다.");

  return (
    <>
      <div>====================</div>
      <div>이것은 프리젠터 입니다!!!</div>
      <div>====================</div>
    </>
  );
}
export default memo(MomoizationPresenterPage);
