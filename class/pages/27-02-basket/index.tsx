import { gql, useQuery } from "@apollo/client";
import { result } from "lodash";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickBasket = (el) => () => {
    console.log("담기:", el);
    // localStorage.setItem("baskets", JSON.stringify(el));

    //배열로 저장되지만 1개밖에 안담김
    // const baskets = [];
    // baskets.push(JSON.stringify(el));
    // localStorage.setItem("baskets", JSON.stringify(baskets));

    //여러개 담김(중복됨)
    // const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    // baskets.push(el);
    // localStorage.setItem("baskets", JSON.stringify(baskets));

    //여러개 담김(중복안됨)
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    // ["그나","이삐","빵이"].map((el)=>el+"어린이")//그나어린이, 이삐어린이, 빵이어린이

    //체크!!!(이미 담았는지 체크!!!)
    //isExists=false or isExists=true =>스위치변수
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담겨있습니다.");
      return;
    }

    //배열로 담았을때 typename은 빼고 출력하고 싶을때 push할때 el로 하지말고 아래에 방법으로 하면 됨.
    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);

    // baskets.push(el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  //로그인시 장바구니 페이지 이동
  function onClickLogin() {
    alert("로그인에 성공하였습니다.");
    const barkets = JSON.parse(localStorage.getItem("baskets")) || [];
    if (barkets.length) {
      alert("장바구니에 담으신 상품이 있습니다. 장바구니 페이지로 이동할까요?");
      //한줄일땐 생략가능 (아래참조)
      //   if (result) {
      //     //27-03-basket-logged-in
      //     router.push("27-03-basket-logged-in");
      //   }
      if (result) router.push("27-03-basket-logged-in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "20px" }}>{index}</span>
          <span style={{ marginRight: "20px" }}>{el.writer}</span>
          <span style={{ marginRight: "20px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
