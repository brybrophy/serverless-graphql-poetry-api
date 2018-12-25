import axios from 'axios';
import boom from 'boom';

export default {
  getPoemsByAuthor: async author => {
    const res = await axios.get(`http://poetrydb.org/author/${author}`);
    let poems = [];
    if (res && res.data) {
      if (res.data.status && res.data.status !== 200) {
        throw boom.notFound(`Author ${author} Not Found`);
      }
      poems = res.data;
    }

    return poems;
  },
  getPoemByTitle: async title => {
    try {
      const res = await axios.get(`http://poetrydb.org/title/${title}`);
      let poem = [];
      if (res && res.data) {
        if (res.data.status && res.data.status !== 200) {
          throw boom.notFound(`Poem ${title} Not Found`);
        }
        poem = res.data[0];
      }

      return poem;
    } catch (err) {
      throw err;
    }
  }
};
