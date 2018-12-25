'use strict';

import express from 'express';
import serverless from 'serverless-http';
import graphiql from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './types';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: '/graphql'
});

server.applyMiddleware({ app });
app.get('/playground', graphiql({ endpoint: '/graphql' }));
const handler = serverless(app);
export { handler };
