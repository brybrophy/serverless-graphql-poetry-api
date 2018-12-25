import { gql } from 'apollo-server-express';
import poetryTypes from './poetryTypes';
import userTypes from './userTypes';

const queryTypes = gql`
  type Query {
    poemsByAuthor(author: String): [Poem]
    poemByTitle(title: String): Poem
    users: [User]
    userById(id: Int): User
  }
`;

export default [poetryTypes, userTypes, queryTypes];
