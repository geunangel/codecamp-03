import ListPresenterItem from "./BoardCommentList.presenterItem";

export default function BoardCommentPresenter(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <ListPresenterItem key={el._id} el={el} />
      ))}
    </>
  );
}
