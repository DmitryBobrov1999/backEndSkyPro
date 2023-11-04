const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const logger = require('./middlewares/logger');
const status404 = require('./middlewares/status404');

const app = express();

dotenv.config();

const { PORT, API_URL, MONGO_URL } = process.env;

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log('Connected to MongoDb');
	})
	.catch(err => {
		console.log('not connected');
	});

app.use(cors());

app.use(logger);

app.use(bodyParser.json());

app.use(userRouter);

app.use(status404);

app.listen(PORT, () => {
	console.log(`Сервер запущен по адресу: ${API_URL}:${PORT}`);
});
