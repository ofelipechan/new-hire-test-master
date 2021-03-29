const express = require('express');
const app = express();
const routes = require('./routes');
const { connectDatabase } = require('./database');

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';


app.listen(port, () => console.log(`API listening on port ${port}`));

connectDatabase(() => console.log('Database connected'))
    .catch((err) => console.error('An error occurred while trying to start database.', err));