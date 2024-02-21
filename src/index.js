require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = process.env.DB_CONNECTION_STRING;
const app = express();
const port = 3001;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.use(express.json());
app.use(cors());

client.connect();

const zeus = client.db("zeus");
const racao = zeus.collection("racao");

app.get('/racao', async (request, response) => {
    const test = await racao.find().toArray();
    response.json(test);
})

app.post('/racao', async (request, response) => {
    const cost = request.body;

    await racao.insertOne(cost);
    const allCosts = await racao.find().toArray();

    response.json(allCosts);
})

app.patch('/racao', async (request, response) => {
    const { id, ...updatedData } = request.body;

    const result = await racao.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
    )

    if (result.modifiedCount === 1) {
        response.json({ message: "tudo show" })
    } else {
        response.status(404).json({ error: "tudo não show" })
    }
})

app.listen(port, () => {
    console.log(`Aplicação iniciada com sucesso na porta ${port}`);
})