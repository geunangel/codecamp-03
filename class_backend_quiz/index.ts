import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Product from "./Product.postgres";

const typeDefs = gql`
  type ID {
    _id: String
  }

  type Product {
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProduct: Product
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Return {
    message: String
    number: Int
    _id: String
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): Return
    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ): Return
    deleteProduct(productId: ID): Return
  }
`;

const resolvers = {
  Query: {
    fetchProduct: async () => {
      const result = await Product.findOne({
        where: { number: 1 },
      });
      return result;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      const result = await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      console.log(result);
      return { message: "성공했습니다" };
    },

    updateProduct: async (_: any, args: any) => {
      await Product.update(
        { _id: args.productId },
        { ...args.updateProductInput }
      );
      return { message: "수정완료!!!" };
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.delete({ _id: args.productId });
      return { messge: "삭제되었습니다" };
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
