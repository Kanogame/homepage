import bodyParcser from "body-parser";
import { createClient } from 'redis';
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParcser.json());

const client = await createClient({
    url: 'redis://default:qwerty123@redis'
  })
.on('error', err => console.log('Redis Client Error', err))
.connect();
//await client.set('key', 'value');
//const value = await client.get('key');
//await client.disconnect();

app.post("/api/activities/edit", async (req, res) => {
    const data = req.body;
    await client.set(data.type, data.value);
    res.json({
        success: true,
    });
});

app.get("/api/activities/get", async (req, res) => {
    res.json({
        success: true,
        activ: await client.get("activ")
    });
});

app.listen(6969, () => {
    console.log("Node server is up!");
});