import { gql } from 'apollo-server-express';

export default gql`
  type Poem {
    title: String
    author: String
    lines: [String]
    linecount: Int
  }
`;
