import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import { schema } from './GraphQLSchemas/schema';
import { ArtPieceManager } from './Resolvers/ArtPieceManager';
const cors = require('cors');

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(cors()); // allow use of the API by other hosts

// Create an express server and a GraphQL endpoint
app.use('/api', graphqlHTTP({
  schema: schema,  // Must be provided
  rootValue: { ArtPieces: ArtPieceManager.GetArtPieces },
  graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));

app.listen(port, () => {
   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
