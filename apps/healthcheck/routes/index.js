// const router = require('lib/router')

const { Router } = require('express')
const router = Router()

const HealthCheckController = require('../controllers')

router.get('/ping', HealthCheckController.ping)
router.get('/healthcheck', HealthCheckController.healthcheck)
router.get('/get-config', HealthCheckController.getConfig)

module.exports = router