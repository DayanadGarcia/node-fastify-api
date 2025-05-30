// servidor nativo do Node.js
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//     res.write("Hello, world!");

//     return res.end()
// });

// server.listen(3333)

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()


server.listen({
  port: 3333,
})

// Define the routes
// GET /videos - List all videos
server.get('/videos', () => {
  return database.list()
})

// POST /videos - Create a new video
server.post('/videos', (req, res) => {
  const { title, description, duration } = req.body

  console.log(req.body)

  database.create({
    title,
    description,
    duration,
  })

  return res.status(201).send("Video created successfully!")

})

// PUT /videos/:id - Update a video by ID
server.put('/videos/:id', (req, res) => {
  const videoId = req.params.id
  const { title, description, duration } = req.body

  database.update(videoId, {
    title,
    description,
    duration,
  })
  return res.status(204).send()
})

// DELETE /videos/:id - Delete a video by ID
server.delete('/videos/:id', (req, res) => {
  const videoId = req.params.id
  database.delete(videoId)
  return res.status(204).send()
})