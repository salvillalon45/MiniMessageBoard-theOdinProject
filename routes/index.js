var express = require('express');
var router = express.Router();

const messages = [
	{ text: "It's all good", user: 'The Vaccines', added: new Date() },
	{
		text: 'Call It What You Want',
		user: 'Foster The People',
		added: new Date()
	}
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'The Odin Project: Mini Messageboard',
		messages: messages
	});
});

router.get('/new', function (req, res, next) {
	res.render('form', {
		title: 'The Odin Project: Mini Messageboard'
	});
});

router.post('/new', function (req, res, next) {
	console.log(req.body.user);
	console.log(req.body.text);

	const user = req.body.user;
	const text = req.body.text;
	messages.push({
		user: user,
		text: text,
		added: new Date()
	});
	console.log(messages);
	res.redirect('/');
});

module.exports = router;
