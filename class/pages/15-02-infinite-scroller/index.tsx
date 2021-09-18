import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function InfiniteScrollerPage() {
  //refetch 받아왔던걸 기존거 버리고 새로 받아옴
  //fetchMore 받아왔던거에서 추가로 받아옴
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  function onLoadMore() {
    //데이터가 없으면 멈춤
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      //prev 기존에 있었거, fetchMoreResult 새로 불러온거
      updateQuery: (prev, { fetchMoreResult }) => {
        //합쳐서 새로운 버전으로 내보내줌
        //기존꺼 다시 그대로 10개를 뿌려줌, 지금 추가로 받아온 데이터를 합침
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  }

  return (
    //hasMore false이면 loadMore가 실행 안됨
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
        </div>
      ))}
    </InfiniteScroll>
  );
}
