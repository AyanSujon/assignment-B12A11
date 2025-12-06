const express = require('express')
const cors = require('cors');

const app = express()
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 3000


// Middleware
app.use(cors());
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tachgq7.mongodb.net/assignment-B12A11?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db('assignment-B12A11');
    const usersCollection = db.collection('users');



    // app.post('/register', async(req, res)=>{
    //   console.log(req.dody , "request");
    // })



    app.post('/users', async (req, res) => {
      const user = req.body;
      // user.role = 'user';
      // user.createdAt = new Date();
      user.role = 'member',
      user.createdAt = new Date().toISOString() // <-- dynamic timestamp
      const email = user.email;
      const userExists = await usersCollection.findOne({ email })
      console.log("user data: ", user)
      console.log("existing user", userExists)
      if (userExists) {
        return res.send({ message: 'user exists' })
      }

      const result = await usersCollection.insertOne(user);
      res.send(result);
    })



























    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



























app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

