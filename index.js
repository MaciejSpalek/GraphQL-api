const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB =
  "mongodb+srv://cryptospwrtt:H760skRq4wyIZqrY@cluster0.ewdop6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB connected");
  return server.listern({ port: 5000 });
}).then(res => {
  console.log(`Server running at ${res.url}`)
});
