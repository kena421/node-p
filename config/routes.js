// const router = require('lib/router')
const { Router } = require('express')
const router = Router()
// All apps routes here
const healthcheckRoutes = require('apps/healthcheck/routes')

router.use(healthcheckRoutes)

module.exports = router