const http = require('http');
const getUsers = require('./modules/users');

const server = http.createServer(async (request, response) => {
	const url = new URL(request.url, `http://${request.headers.host}`);
	const query = url.searchParams;
	const userName = query.get('hello');

	if (request.url === '/?users') {
		response.statusCode = 200;
		response.statusMessage = 'OK';
		response.header = 'Content-Type: application/json';
		response.write(getUsers());
		response.end();
		return;
	} else if (request.url === `/?hello=${userName}`) {
		if (userName) {
			response.statusCode = 200;
			response.statusMessage = 'OK';
			response.header = 'Content-Type: text/plain';
			response.write(`Hello, ${userName}`);
			response.end();
			return;
		}
		if (userName === '') {
			response.statusCode = 400;
			response.statusMessage = 'Error';
			response.header = 'Content-Type: text/plain';
			response.write('Enter a name');
			response.end();
			return;
		}
	} else if (request.url === '/') {
		response.statusCode = 200;
		response.statusMessage = 'OK';
		response.header = 'Content-Type: text/plain';
		response.write('Hello, World!');
		response.end();
		return;
	} else {
		response.statusCode = 500;
		response.statusMessage = 'Internal Server Error';
		response.header = 'Content-Type: text/plain';
		response.write('');
		response.end();
		return;
	}
});

server.listen(3003, () => {
	console.log('Сервер запущен по адресу: http://127.0.0.1:3003');
});
