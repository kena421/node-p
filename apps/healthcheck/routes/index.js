// const router = require('lib/router')

const { Router } = require('express')
const router = Router()

const healthCheck = require('../controllers')

router.use('/ping', healthCheck.ping)
router.use('/healthcheck', healthCheck.healthcheck)
router.use('/get-config', healthCheck.getConfig)

module.exports = router