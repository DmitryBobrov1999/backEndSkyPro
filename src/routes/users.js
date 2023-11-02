const router = require('express').Router();

const {
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
} = require('../controllers/users');

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:user_id', getUser);
router.patch('/users/:user_id', updateUser);
router.delete('/users/:user_id', deleteUser);

router.get('/books', getBooks);
router.post('/books', createBook);
router.get('/books/:book_id', getBook);
router.patch('/books/:book_id', updateBook);
router.delete('/books/:book_id', deleteBook);

module.exports = router;
