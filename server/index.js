const express = require('express')
const cors = require('cors')
const http = require('http')
const router = express.Router()

router.get('/dialogs', (req, res) => {

    return res.json({message: 'Welcome to the server!'})
})

const app = express()

app.use(cors({origin: '*'}))
app.use(express.json())
app.use('/api', router)

const server = http.createServer(app)

app.listen(5000, () => {
    console.log('Server running on port 5000.')
})