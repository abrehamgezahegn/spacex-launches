import axios from "axios";

const resolvers = {
  Query: {
    async users(parent, args, context) {
      const users = await context.prisma.user.findMany();
      // console.log("users", users);
      return users;
    },
  },
};

export default resolvers;
