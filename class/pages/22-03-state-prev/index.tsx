import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    // setCount((prev) => prev + 1);
    setCount((qwertyufghjkl) => {
      const aaa = 33;
      let bbb = 22;
      //아무로직 쓰기

      return qwertyufghjkl + 1;
    });

    //
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}
