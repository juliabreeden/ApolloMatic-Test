
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importing typeDefs and resolvers
const typeDefs = require('./src/schema');
const resolvers = require('./resolvers/index.js');

const uri = 'mongodb+srv://juliabreeden1018:Avocado912%21@cluster0.7k6qhck.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: false,
  debug: true  //
});

const app = express();

app.use(cors({
  origin: '/',
  credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// Apply Apollo middleware
server.start().then(() => {
  server.applyMiddleware({ app });
});


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
