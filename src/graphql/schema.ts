import { gql } from "apollo-server-express";

const Schema = gql`
  type ZipCodeInfo {
    zipCode: ID!
    country: String!
    countryCode: String!
    locations: [Location!]
  }
  type Location {
    locationName: String!
    longitude: String!
    state: String!
    stateCode: String!
    latitude: String!
  }

  type Query {
    getZipCodeInfo(countryCode: String!, postalCode: String!): ZipCodeInfo
}
`;

export default Schema;
