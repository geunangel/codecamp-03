import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // 임시공간안에 들어간 숫자를 더해주는게 아니라 state로 준걸 불러와서
    // 거기서 +1해서 여러번 써도 한번만 출력
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //임시 공간안에 들어가서(이전 값) 거기서 +1 더해줌
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </div>
  );
}
