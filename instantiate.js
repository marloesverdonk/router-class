const express = require('express')

const port = process.env.PORT || 4000

const { Router } = express
const router = new Router()
router.get('/', (request, response) => response.send('test!'))

const app = express()
app.use(router)

app.listen(port, () => console.log('listening on port', port))