import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

//세팅완료
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;

export default function GraphqlMutationBoard1Page() {
  //04-04-graphql-mutation-board3 과 비교하면서 학습하기!!!
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      //출력하면 나오는 값
      //writer: myInputs.writer
      //title: myInputs.title
      //contents: myInputs.contents

      //writer: "철수"
      //writer: "철수"로 바뀜

      //writer: event.target.value
      //키에는 .이 들어갈 수 없음

      //event.target.name=>여기에 있는 네임은 아래 input안에 있는 name
      //name 대신 id를 쓸 수는 있으나 아이디는 고유한 것이므로, name을 써야 함
      [event.target.name]: event.target.value,
    });
    //event.target.name //writer
    //event.target.value
  }

  async function aaa() {
    //createBoard 요청 ->  응답(백엔드컴퓨터)-> awit응답을 받을때까지 기다려줌-> 응답을 받아서 result 저장
    const result = await createBoard({
      variables: { ...myInputs },
    });
    //응답했던거 출력 result
    console.log(result);
    console.log(result.data.createBoard.number);
  }

  return (
    //부모
    <>
      {/* 자식 */}
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
