import BoardReadContainer from "../../../src/units/board/read/BoardRead.container";
import BoardCommentWriter from "../../../src/units/comment/writer/BoardCommentWriter.container";
import BoardCommentList from "../../../src/units/comment/list/BoardCommentList.container";

export default function BoardsDetailPage() {
  return (
    <>
      <BoardReadContainer />
      <BoardCommentWriter />
      <BoardCommentList />
    </>
  );
}
