const express = require('express')
const { Router } = express

const teachers = ['Arien']

const router = new Router()
  router.get(
  '/teacher', 
  (request, response) => response.send([teachers])
)

module.exports = router
