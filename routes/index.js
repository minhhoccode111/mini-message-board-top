const express = require('express');
const router = express.Router();

// Factory function to create a new chat
const Chat = (name, text) => ({ name, text, added: new Date() });

const messages = [
  {
    name: 'Mario',
    text: 'Hi there!',
    added: new Date(),
  },
  {
    name: 'Maria',
    text: 'Hello, World!',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini message board', messages });
});

router.post('/new', (req, res, next) => {
  const body = req.body;

  const newChat = Chat(body.username, body.message);

  console.log(newChat);

  messages.push(newChat);

  res.redirect('/');
});

module.exports = router;
