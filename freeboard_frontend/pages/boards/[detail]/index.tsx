import BoardReadContainer from "../../../src/components/units/board/read/BoardRead.container";
import BoardCommentWriter from "../../../src/components/units/board/comment/writer/BoardCommentWriter.container";
import BoardCommentList from "../../../src/components/units/board/comment/list/BoardCommentList.container";

export default function BoardsDetailPage() {
  return (
    <>
      <BoardReadContainer />
      <BoardCommentWriter />
      <BoardCommentList />
    </>
  );
}
