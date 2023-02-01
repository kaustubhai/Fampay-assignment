import express from 'express'
import router from './router/index.js'
import connectDB from './utils/connectDB.js'
import { PORT } from './utils/load-env.js'
import scrapeYoutube from './utils/scraper.js'
import createResp from './utils/createResp.js'

const app = express()
app.use(express.json())
connectDB()
scrapeYoutube()
app.use('/api', router)
app.use('/', (req, res) => res.json(createResp(true, 'Server is UP')))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))