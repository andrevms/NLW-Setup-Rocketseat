import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoutes } from './routes';
const port = 3333;
const app = Fastify();

app.register(cors)
app.register(appRoutes)

app.listen({
    port: port,
    host: '0.0.0.0',
}).then(() => {
    console.log(`HTTP Server running! at ${port}`)
})
