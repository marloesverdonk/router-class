const express = require('express')
const { Router } = express

const students = ['Marloes']

const router = new Router()
router.get(
  '/student', 
  (request, response) => response.send([students])
)

module.exports = router