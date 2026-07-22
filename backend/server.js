const express = require('express');
const { Client } = require('pg');
const app = express();

const client = new Client({
  host: 'db',        // service name in docker-compose
  user: 'postgres',
  password: 'postgres',
  database: 'postgres'
});

client.connect();

app.get('/', async (req, res) => {
  const result = await client.query('SELECT NOW()');
  res.send(`Hello from backend! DB time: ${result.rows[0].now}`);
});

app.listen(3000, () => console.log('Backend running on port 3000'));
