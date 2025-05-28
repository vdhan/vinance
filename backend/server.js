import Fastify from 'fastify';

const fastify = Fastify({logger: true});

fastify.get('/', async (request, reply) => {
  reply.send({hello: 'world'});
});

try {
  await fastify.listen({
    host: '0.0.0.0',
    port: 3000
  });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}