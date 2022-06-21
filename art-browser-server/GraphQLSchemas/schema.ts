const { buildSchema } = require('graphql');

export const schema = buildSchema(`
   type Query {
      ArtPieces(pageNumber: Int!): [ArtPiece]
  },
  type ArtPiece {
    title: String
    artistName: String
    imageURL: String
  }
`);
