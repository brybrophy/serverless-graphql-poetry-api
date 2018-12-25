import boom from 'boom';

const users = [
  {
    id: 1,
    firstName: 'Bryan',
    lastName: 'Brophy',
    email: 'bryan.brophy@outreach.io'
  },
  {
    id: 2,
    firstName: 'Matt',
    lastName: 'Vargeson',
    email: 'matt.vargeson@outreach.io'
  }
];

export default {
  getAllUsers: () => {
    return users;
  },
  getUserById: id => {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw boom.notFound(`User With ID ${id} Not Found`);
    }

    return user;
  }
};
