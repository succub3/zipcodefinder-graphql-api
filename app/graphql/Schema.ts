import { gql } from "apollo-server-express";

const Schema = gql`
  type Person {
    id: ID!
    name: String
  }

  type Query {
    getAllZipCodes: [Person]
    getZipCode(id: String!): Person
}
`;

export default Schema;
