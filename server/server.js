require('dotenv').config();

const rootRouter = require('./app/index');
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', rootRouter);

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});