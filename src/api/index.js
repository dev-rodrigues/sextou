const koa = require('koa'),
      koaRouter = require('koa-router'),
      koaBody = require('koa-bodyparser'),
      { graphqlKoa, graphiqlKoa } = require('apollo-server-koa'),
      spotifySchema = require('./schemas/spotify');

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

router.post('/graphql', koaBody(), graphqlKoa({ schema: spotifySchema }));
router.get('/graphql', graphqlKoa({ schema: spotifySchema }));

router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`eae sextou? 😌 🎧`);
});
