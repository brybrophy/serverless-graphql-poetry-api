import PoetryService from '../services/poetryService';

export default {
  poemsByAuthor: (_obj, args) => {
    const poems = PoetryService.getPoemsByAuthor(args.author);
    return poems;
  },
  poemByTitle: (_obj, args) => {
    const poem = PoetryService.getPoemByTitle(args.title);
    return poem;
  }
};
