import poetryResolver from './poetryResolver';
import userResolver from './userResolver';

export default {
  Query: {
    ...poetryResolver,
    ...userResolver
  }
};
