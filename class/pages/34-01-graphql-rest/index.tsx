import axios from "axios";

export default function GraphqlRestPage() {
  const onClickRequest = async () => {
    //게시물을 넘길땐 post방식이고, 받고할땐 get을 쓴다.
    //graphql를 쓸땐 항상 post방식으로 쓴다. graphql은 받을때도 post로 쓴다
    const result = await axios.post(
      "http://backend03.codebootcamp.co.kr/graphql",
      {
        query: `mutation createBoard {
                        createBoard(
                            createBoardInput:{
                                writer:"당근아",
                                password:"1004",
                                title:"당근!!!",
                                contents:"당근당근!!!"
                            }
                        ){
                            _id
                            writer
                        }
                    }
                    `,
      }
    );
    console.log(result);
  };

  return (
    <button onClick={onClickRequest}>
      클릭해서 Graphql을 Axios로 요청하기!!!
    </button>
  );
}
