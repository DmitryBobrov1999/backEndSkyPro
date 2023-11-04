const User = require('../models/user');
const Book = require('../models/book');

const getUsers = (request, response) => {
	// Get all users
	return User.find({})
		.then(data => {
			response.status(200).send(data);
		})
		.catch(e => {
			response.status(500).send(e.message);
		});
};

const getUser = (request, response) => {
	// Get user
	const { user_id } = request.params;
	return User.findById(user_id)
		.then(user => {
			response.status(200).send(user);
		})
		.catch(e => response.status(500).send(e.message));
};

const createUser = (request, response) => {
	// Create new user
	return User.create({ ...request.body })
		.then(user => {
			response.status(201).send(user);
		})
		.catch(e => {
			response.status(500).send(e.message);
		});
};

const updateUser = (request, response) => {
	// Update user
	const { user_id } = request.params;
	return User.findByIdAndUpdate(user_id, { ...request.body })
		.then(user => {
			response.status(200).send(user);
		})
		.catch(e => response.status(500).send(e.message));
};

const deleteUser = (request, response) => {
	// Delete user
	const { user_id } = request.params;
	return User.findByIdAndDelete(user_id)
		.then(() => {
			response.status(200).send('Success');
		})
		.catch(e => response.status(500).send(e.message));
};

const getBooks = (request, response) => {
	// Get all users
	return Book.find({})
		.then(data => {
			response.status(200).send(data);
		})
		.catch(e => response.status(500).send(e.message));
};

const getBook = (request, response) => {
	// Get user
	const { book_id } = request.params;
	return Book.findById(book_id)
		.then(book => {
			response.status(200).send(book);
		})
		.catch(e => response.status(500).send(e.message));
};

const createBook = (request, response) => {
	// Create new user
	return Book.create({ ...request.body })
		.then(book => {
			response.status(201).send(book);
		})
		.catch(e => response.status(500).send(e.message));
};

const updateBook = (request, response) => {
	// Update user
	const { book_id } = request.params;
	return Book.findByIdAndUpdate(book_id, { ...request.body })
		.then(book => {
			response.status(200).send(book);
		})
		.catch(e => response.status(500).send(e.message));
};

const deleteBook = (request, response) => {
	// Delete user
	const { book_id } = request.params;
	return Book.findByIdAndDelete(book_id)
		.then(() => {
			response.status(200).send('Success');
		})
		.catch(e => response.status(500).send(e.message));
};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,

	getBooks,
	getBook,
	createBook,
	updateBook,
	deleteBook,
};
