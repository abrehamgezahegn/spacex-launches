import { ApolloServer, gql } from "apollo-server-micro";
import prisma from "../../lib/prisma";
import typeDefs from "./schemas";
import resolvers from "./resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma },
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
