import express from "express";
import { pool} from "./db.js";
import { PORT } from "./config.js";

const app = express();



app.get('/', async (req, res) =>{
    const [rows] = await pool.query(`SELECT * from users`);
    res.json(rows);
});

app.get('/ping', async (req, res) =>{
    const [result] = await pool.query(`SELECT "hello word " as RESULT `);
    console.log(result);
    res.json(result[0]);
});

app.get('/create', async (req, res) =>{
    const result = await pool.query('INSERT INTO users(nane) VALUES ("jhon"), ("juan"), ("carlos") ');    
    res.json(result);
});

app.listen(PORT);
console.log('Server on port 3000', PORT);
