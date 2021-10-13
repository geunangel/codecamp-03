import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  return (
    <>
      <div>작성자:{data?.fetchBoard.writer}</div>
      <div>제목:{data?.fetchBoard.title}</div>
      <div>
        내용:
        {/* {typeof window !== "undefined"&& */}
        {/* 위와 똑같음 */}
        {process.browser && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            }}
          >
            {/* {data?.fetchBoard.contents} */}
          </div>
        )}
      </div>
    </>
  );
}
