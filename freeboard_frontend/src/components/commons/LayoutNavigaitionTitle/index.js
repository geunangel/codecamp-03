import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const LayoutNavTitle = styled.div`
  width: 20vh;
  margin-top: 10px;
  text-align: center;
  font-size: 4vh;
  cursor: pointer;
  font-family: "my2font";
  font-weight: bold;
  border-bottom: ${(props) => (props.isOn ? "2px solid gray" : "")};
  :hover {
    opacity: 50%;
    font-size: 3vh;
    color: black;
  }
`;
export default function LayoutNavigaitionTitle(props) {
  const router = useRouter();
  const [isOn, setIsOn] = useState(false);

  const onClickMoveToId = (e) => {
    router.push(e.target.id);
    setIsOn((prev) => !prev);
  };

  console.log(props.isSelect);
  return (
    <LayoutNavTitle id={props.id} onClick={onClickMoveToId} isOn={isOn}>
      {props.name}
    </LayoutNavTitle>
  );
}
