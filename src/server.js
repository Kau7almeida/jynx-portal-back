// import the framework and instantiate it
import Fastify from 'fastify'

// cors
import fastifyCors from '@fastify/cors'

// swagger
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

// routes
import { usersRoutes } from './routes/users/users.routes.js'
import { coursesRoutes } from './routes/courses/courses.routes.js'
import { classesRoutes } from './routes/classes/classes.routes.js'
import { studentsRoutes } from './routes/students/students.routes.js'

const fastify = Fastify({
    logger: true
})

await fastify.register(fastifyCors, {
    origin: true
})

await fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Workspace Portal Jynx Educação',
      description: 'Documentação da API',
      version: '1.0.0'
    },
    servers: [
      { url: 'http://localhost:3333', description: 'Server Development' }
    ]
  }
})

await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

// register routes
fastify.register(usersRoutes, {
    prefix: '/users'
})

fastify.register(coursesRoutes, {
    prefix: '/courses'
})

fastify.register(classesRoutes, {
    prefix: '/classes'
})

fastify.register(studentsRoutes, {
    prefix: '/students'
})

// server root route
fastify.get('/', async (request, reply) => {
    reply.send("server is running at port 3333");
})

// run the server!
try {
    await fastify.listen({ port: 3333 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}