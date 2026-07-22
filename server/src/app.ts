import express, { response } from 'express'
import cors from 'cors'
import pool from "./db.js"

const app = express()

app.use(cors())
app.use(express.json())

/*
app.get('/', (_request, response) => {
  response.send('Elevprojektssystemets API är igång')
})
*/

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok' })
})

app.get('/api/students', async (_request, response) => {
  try {
    const result = await pool.query(
      `SELECT id, first_name, last_name, email, created_at
       FROM students
       ORDER BY id`
    )
      response.status(200).json(result.rows)
  } catch (error){
    console.error('Kunde inte hitta elever.', error)
    response.status(500).json({
      message: 'Kunde inte hämta elever.'
    })
  }
})
export default app