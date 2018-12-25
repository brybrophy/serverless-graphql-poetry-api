import { gql } from 'apollo-server-express';

export default gql`
  type User {
    firstName: String
    lastName: String
    email: [String]
  }
`;
