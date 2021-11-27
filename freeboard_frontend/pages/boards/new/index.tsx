import BoardWriteContainer from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardsNew() {
  //return 위쪽은 Javascript 쓰는 곳
  //return 아래는 HTML 쓰는 곳
  return <BoardWriteContainer isEdit={false} />;
}
