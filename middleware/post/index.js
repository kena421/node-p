const { Router } = require('express')
const router = Router()

const notFound = require('../post/not_found')

router.use(notFound);

module.exports = router;