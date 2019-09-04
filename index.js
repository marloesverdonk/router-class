const express = require('express')
const teacherRouter = require('./teacherRouter')
const studentRouter = require('./studentRouter')

const port = 4000

const app = express()
app.use(teacherRouter)
app.use(studentRouter)

app.listen(port, () => console.log('listening on port', port))

