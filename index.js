require("dotenv").config();

const { ApolloServer } = require("apollo-server");

const connectDB = require("./config/database");

const typeDefs = require("./Graphql/typeDefs");
const resolvers = require("./Graphql/resolvers");

connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 9001 })
  .then(({ url }) => console.log(`Server running at ${url}`));
