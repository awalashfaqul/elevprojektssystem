import express, { response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_request, response) => {
  response.send('Elevprojektssystemets API är igång')
})

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok' })
})

export default app