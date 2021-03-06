import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//암묵적인 룰로 _ 이걸로 이름 씀
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 50px;
`;

const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;

export default function SearchDebouncePage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    //page: 1 생략가능
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  function onChangeSearch(event) {
    getDebounce(event.target.value);

    // refetch({ search: event.target.value });
    // setMyKeyword(event.target.value);
    // setMySearch(event.target.value);
  }

  // function onClickSearch() {
  //   //variables 생략가능
  //   refetch({ search: mySearch });
  //   //검색버튼 눌려야 change되게 만드는 거
  //   setMyKeyword(mySearch);
  // }

  function onClickPage(event) {
    //검색창에만 쳐도 change됨
    //refetch({ search: mySearch, page: Number(event.target.id) });

    //검색버튼 눌려야 change됨
    refetch({ search: myKeyword, page: Number(event.target.id) });
  }

  return (
    <>
      <div>검색페이지</div>
      검색어: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.createdAt}</Column>
        </div>
      ))}
      <br />
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
