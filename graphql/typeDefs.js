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

  type Query {
    Post(ID: ID!): Post!
    getPosts(amount: Int): [Post]
  }

  type Mutation {
    createPost(PostInput: PostInput): Post!
    deletePost(ID: ID!): Boolean
    editPost(ID: ID!, PostInput: PostInput): Boolean
  }
`;
