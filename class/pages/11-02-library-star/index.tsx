import { Rate } from "antd";
import { useState } from "react";

// 한번만 실행되도 되는것들은 위에다 씀
// const desc = ["terrible", "bad", "normal", "good", "wonderful"]; //설명부분

export default function LibraryStarPage() {
  //use 빼곤 안에 있는 것들이 다시 만들어진다
  //value는 자기가 사용할 수 있는 영역이 있다
  const [value, setValue] = useState(3);

  //const aaa = 3;

  //(value)를 쓰면 안에 value가 있는거랑 같음
  const handleChange = (value) => {
    // {}안에서 가장 가까운 찾고 없으면 그위에 있는 {}에서 찾고 그래도 없으면 그밖에 {}에서 찾음
    //console.log(aaa)

    //가장 가까운 {}에 있는 value를 찾고 없으면 그위에 {}안에 있는 value를 찾는다
    setValue(value);
  };

  return (
    <span>
      {/* 가장가까운 중괄호 value를 찾음 */}
      {/* antD에서 만들때 onChange를 썼음 이벤트가 발생하진 않음 */}
      <Rate onChange={handleChange} value={value} />

      {/* <Rate tooltips={desc} onChange={handleChange} value={value} /> */}

      {/* 설명부분 */}
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
    </span>
  );
}
