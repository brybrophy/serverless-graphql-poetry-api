import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: Int
    firstName: String
    lastName: String
    email: [String]
  }
`;
