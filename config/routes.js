// const router = require('lib/router')
const { Router } = require('express')
const router = Router()
// All apps routes here
const healthcheckRoutes = require('apps/healthcheck/routes')
const loginRoutes = require('apps/login/routes')

router.use(healthcheckRoutes)
router.use(loginRoutes)

module.exports = router