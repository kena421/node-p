const { Router } = require('express')
const router = Router()

const cors = require('cors')
const appsLogStream = require('lib/morgan')
const morgan = require('morgan')

router.use(cors());
router.use(morgan('tiny', {stream: appsLogStream}))

module.exports = router;