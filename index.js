const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zbdwt9q.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("HomeFixo");
    const services = db.collection("services");
    const bookings = db.collection("bookings");

    // GET:
    // Api endpoint for fetching all the services data from mongodb
    app.get("/services", async (req, res) => {
      const result = await services.find().toArray();
      res.send(result);
    });
    // Api endpoint for fetching only provider's services data from mongodb
    app.get("/my-services", async (req, res) => {
      // console.log(req.user)
      const email = req.query.email;

      const result = await services.find({ email: email }).toArray();

      res.send({ success: true, result });
    });
    //Api endpoint for fetching a single service data using its _id
    app.get("/service-details/:id", async (req, res) => {
      const { id } = req.params;
      // console.log(id);
      const result = await services.findOne({ _id: new ObjectId(id) });
      // console.log(result);

      res.send({ success: true, result });
    });

    //POST: Api endpoint to add a new service to mongodb
    app.post("/service", async (req, res) => {
      const data = req.body;
      // console.log(data)
      const result = await services.insertOne(data);

      res.send({
        success: true,
        result,
      });
    });

    app.post("/booking", async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await bookings.insertOne(data);
      
      res.send({
        success: true,
        result,
      })
    });

    // PUT/PATCH
    app.put("/edit-service/:id", async (req, res) => {
      const data = req.body;
      const { id } = req.params;
      // console.log(id)
      // console.log(data);

      const filter = { _id: new ObjectId(id) };
      const update = {
        $set: data,
      };

      const result = await services.updateOne(filter, update);

      res.send({ success: true, result });
    });

    //DELETE
    app.delete("/delete-service/:id", async (req, res) => {
      const { id } = req.params;
      // console.log(id)

      const result = await services.deleteOne({ _id: new ObjectId(id) });

      res.send({ success: true, result });
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is running fine");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
