const express = require('express')
const router = express.Router()
const compression = require('compression')

const cors = require('cors')
const appsLogStream = require('lib/morgan')
const morgan = require('morgan')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cors());
router.use(compression())
router.use(morgan('tiny', {stream: appsLogStream}))

module.exports = router;