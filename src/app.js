const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const logger = require('./middlewares/logger');
const { response } = require('express');

const app = express();

dotenv.config();

const {
	PORT = 3005,
	API_URL = 'http://127.0.0.1',
	MONGO_URL = 'mongodb://127.0.0.1:27017/bobrovbackend',
} = process.env;

mongoose.connect(MONGO_URL).then(() => {
	console.log('Connected to MongoDb')
}).catch(err => {
	console.log('not connected');
});

app.use(cors());
app.use(logger);
app.use(bodyParser.json());

app.use(userRouter)

app.listen(PORT, () => {
	console.log(`Сервер запущен по адресу: ${API_URL}:${PORT}`);
});
