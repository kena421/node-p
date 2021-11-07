const router = require('express').Router()

const notFound = require('./not_found');
const errorMiddleware = require('./error');

router.use(notFound);
router.use(errorMiddleware)

module.exports = router;