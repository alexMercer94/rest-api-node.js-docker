const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({ message: 'Hello Wordl' }));

module.exports = router;
