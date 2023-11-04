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

app.post("/api/activities/edit", async (req, res) => {
    const data = req.body;
    var todayEnd = new Date().setHours(23, 59, 59, 999);
    await client.set(data.type, data.value, "EX", parseInt(todayEnd/1000));
    res.json({
        success: true,
    });
});

app.get("/api/activities/get", async (req, res) => {
    const type = req.query.type;
    try {
        const resp = await client.get(type)
        res.json({
            success: true,
            value: resp
        });
    } catch (e) {
        res.json({
            success: false,
        });
    }
});

app.listen(6969, () => {
    console.log("Node server is up!");
});