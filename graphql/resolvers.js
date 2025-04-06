const Post = require("../models/Post");

module.exports = {
  Query: {
    async Post(_, { ID }) {
      return await Post.findById(ID);
    },
    async getPosts(_, { amount }) {
      return await Post.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createPost(_, { PostInput: { author, description } }) {
      const createdPost = new Post({
        createdAt: new Date().toISOString(),
        description,
        author,
      });

      const res = await createdPost.save();

      return {
        id: res._id,
        ...res._doc,
      };
    },
    async deletePost(_, { ID }) {
      const deletedPost = await Post.deleteOne({ _id: ID });

      return deletedPost.deletedCount;
    },
    async editPost(_, { ID, PostInput: { author, description } }) {
      const editedPost = await Post.updateOne(
        { _id: ID },
        { author, description }
      );

      return editedPost.modifiedCount;
    },
  },
};
