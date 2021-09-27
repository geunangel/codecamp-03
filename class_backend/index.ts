// console.log("hello world");
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";

//playground에서 확인가능
//http://localhost:4000
const typeDefs = gql`
  type Board {
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board]
  }

  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }
  type Return {
    message: String
    number: Int
  }

  type Mutation {
    # 주석입니다. createBoard(writer: String, title: String, age: Int): Return
    # 반드시 있어야 되면 !붙어야 함
    createBoard(createBoardInput: CreateBoardInput): Return
    updateBoard: Return
    deleteBoard: Return
  }
`;

const resolvers = {
  Query: {
    fetchBoard: async () => {
      //데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)
      //return { writer: "철수", title: "제목입니다." };

      const result = await Board.findOne({
        where: { number: 1, deletedAt: null },
      });
      return result;
      // result?.age;
      // result?.title;
      // result?.writer;

      // return { writer: result?.writer, title: result?.title, age: result?.age };
    },
    fetchBoards: async () => {
      //.find()안에 조건 안넣으면 전체 출력
      const result = await Board.find({ where: { deletedAt: null } }); //[{...},{...},{...}]
      //result.map
      return result;
    },
  },
  Mutation: {
    //args => gql에서 넘겨올때
    createBoard: async (_: any, args: any) => {
      //데이터 베이스 데이터 입력하기
      //return { message: "성공했습니다", number: 3 };

      // const result = await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      const result = await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });
      console.log(result);

      return { message: "성공했습니다", number: result.identifiers[0].number };
    },

    updateBoard: async (_: any, args: any) => {
      //{}첫번째꺼는 조건
      //{}두번째꺼는 변경 할 값
      await Board.update({ number: 3 }, { writer: "영희" });
      return { message: "수정완료!!!" };
    },

    //실제론 쓰지 않음(중요한 데이터는 수정으로 씀)
    deleteBoard: async () => {
      //await Board.delete({ number: 4 });

      await Board.update({ number: 5 }, { deletedAt: new Date() });
      return { messge: "삭제완료!!!" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5014,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결 성공시 실행
  console.log("접속완료!!!");
  server.listen({ port: 4000 });
});
//.catch(error)=>{console.log(error)};
