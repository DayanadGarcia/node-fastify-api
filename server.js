import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabasePostgres()


server.listen({
  port: 3333,
})

// GET /videos - List all videos
server.get('/videos', async (req) => {
  const search = req.query.search
  const videos =  await database.list(search)

  return videos
})

// POST /videos - Create a new video
server.post('/videos', async (req, res) => {
  const { title, description, duration } = req.body

  console.log(req.body)

  await database.create({
    title,
    description,
    duration,
  })

  return res.status(201).send("Video created successfully!")

})

// PUT /videos/:id - Update a video by ID
server.put('/videos/:id', async (req, res) => {
  const videoId = req.params.id
  const { title, description, duration } = req.body

  await database.update(videoId, {
    title,
    description,
    duration,
  })
  return res.status(204).send()
})

// DELETE /videos/:id - Delete a video by ID
server.delete('/videos/:id', async (req, res) => {
  const videoId = req.params.id
  await database.delete(videoId)
  return res.status(204).send()
})
