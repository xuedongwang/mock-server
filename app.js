const Koa = require('koa');
const Router = require('@koa/router');
const delay = require('delay');
const path = require('path');
const cors = require('@koa/cors');
const chalk = require('chalk');
const views = require('koa-views');

const routes = require('./routes');

const app = new Koa();
const router = new Router();

const PORT = 3000;

const render = views(__dirname + '/views', {
  map: {
    html: 'ejs'
  }
})
app.use(render);

router.get('/', async ctx => {
  await ctx.render('index', {
    apis: routes
  })
})

routes.forEach(route => {
  const { method, path, timeout, data } = route;
  router[method](path, async ctx => {
    if (timeout) {
      await delay(timeout);
    }
    ctx.body = typeof data === 'function' ? data() : data;
  });
})

app
  .use(cors())
  .use(require('koa-static')(path.join(__dirname, './static'), {}))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(chalk.blue(`Mock server running at:http://localhost:${PORT}`))
})