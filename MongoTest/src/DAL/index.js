const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
//const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";
const uri = "mongodb+srv://Deb:Debasi@12@debcluster.lovso.mongodb.net?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const collection = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);

    console.log("Inside Mongo run",movie);
    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//run().catch(console.dir);

module.exports = function () {
  return {
    run : run
   // terminate : 
  }
}