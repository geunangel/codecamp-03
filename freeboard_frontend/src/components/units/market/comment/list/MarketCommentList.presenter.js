import ListPresenterItem from "./BoardCommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentPresenter(props) {
  if (!props.data?.fetchBoardComments.length) return <></>;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onAllList} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <ListPresenterItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
