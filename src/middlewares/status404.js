const status404 = (request, response, next) => {
	response.status(404).send('Not Found');
	next();
};

module.exports = status404;
