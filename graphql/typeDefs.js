const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    author: String
    description: String
    createdAt: String
    id: String!
  }

  input PostInput {
    author: String
    description: String
  }

  input EditInput {
    description: String
  }

  type PostResult {
    posts: [Post!]!
    total: Int!
  }

  type Query {
    Post(ID: ID!): Post!
    getPosts(offset: Int, limit: Int): PostResult!
  }

  type Mutation {
    createPost(PostInput: PostInput): Post!
    deletePost(ID: ID!): Boolean
    editPost(ID: ID!, PostInput: EditInput): Boolean
  }
`;
