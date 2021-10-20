import { useState, useMemo, useCallback } from "react";
import MomoizationPresenterPage from "./presenter";

export default function MomoizationContainerPage() {
  console.log("컨테이너가 렌더링 되었습니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //화면이 새로 그려질때 값이 변함
  //   const randomValue = Math.random();
  //useMemo를 쓸 경우 값이 변하지 않음
  const randomValue = useMemo(() => Math.random(), []);
  console.log(randomValue);

  //useCallback=>함수를 기억할때 씀
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
    // countLet=countLet+1 위와 동일
  }, []);

  const onClickCountState = useCallback(() => {
    console.log(countState + 1);
    //useCallback을 쓸 경우 화면에 보이는 값이 안바뀜
    // setCountState(countState + 1);

    //useCallback을 쓸 경우 화면에 보이는 값이 바뀜
    //useCallback을 쓸 경우 prev를 써서 기존값을 기억해놨다가
    //prev함수로 이전 값을 들고와서 값 변경
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      {/* let은 화면에 다시 그려지지 않음 */}
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1</button>

      {/* state는 화면에 다시 그려짐 */}
      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1</button>

      <MomoizationPresenterPage countState={countState} />
    </>
  );
}
