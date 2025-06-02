/**
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function index(fastify, options) {
  fastify.get('/', async (request, reply) => {
    reply.send({hello: 'world!'});
  });
}

export default index;