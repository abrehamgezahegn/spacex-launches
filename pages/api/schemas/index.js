import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

export default typeDefs;
