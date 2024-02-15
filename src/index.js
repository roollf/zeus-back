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

app.listen(port, () => {
    console.log(`Aplicação iniciada com sucesso na porta ${port}`);
})