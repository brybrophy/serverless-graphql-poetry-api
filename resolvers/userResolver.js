import UserService from '../services/userService';

export default {
  users: () => {
    return UserService.getAllUsers();
  },
  userById: (_obj, args) => {
    return UserService.getUserById(args.id);
  }
};
