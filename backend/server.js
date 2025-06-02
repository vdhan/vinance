import Fastify from 'fastify';
import index from './index.js';

const fastify = Fastify({logger: true});
fastify.register(index);

try {
  await fastify.listen({
    port: 3000,
    host: '0.0.0.0',
  });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}