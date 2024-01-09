const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ngtronghoang97:admin@cluster0.jikqrjh.mongodb.net/";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;