import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function FunCtionalComponentLifecyclePage() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>();

  const [count, setCount] = useState(0);

  // const [state,setState] = useState({
  //     count: 0
  // })

  //componentDidMount 와 동일
  useEffect(() => {
    console.log("컴포넌트 마운트 완료!!!");
    inputRef.current.focus();

    //componentWillUnmount 와 동일
    return () => {
      console.log("잘가요~~~");
    };
    //[] 의존성 배열
    //[]의존성 배열 재실행
  }, []);

  //componentDidUpdat 와 동일
  //처음부터 실행 후
  useEffect(() => {
    console.log("컴포넌트 수정 완료!!!");
  }, [count]);

  //   //setState와 useEffect
  //   useEffect(()=>{
  //       //쓸 수는 있지만 가급적 안쓰는게 좋음
  //       //그리고 나서
  //     setCount((prev)=>prev+1)
  //   },[])

  //   //setState와 useEffect의 dependency-array
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, [count]);

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      현재 카운트: {count}
      <br />
      <button onClick={onClickCount}>카운트 증가!!!</button>
      <br />
      <button onClick={onClickMove}>페이지 이동</button>
      <br />
      <input type="text" ref={inputRef} />
    </>
  );
}
