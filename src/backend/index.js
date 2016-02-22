/**
* src/backend/index.js
*/

import express from 'express'
import api from './api'

const port = process.env.PORT || 3000
const app = express()

app.use('/api', api)

app.use(express.static('_dist/public'))

app.listen(port, function () {
  console.log('Start engine. Listening on port: ' + port)
})