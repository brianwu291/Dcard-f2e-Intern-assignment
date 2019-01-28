const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

router.use(require('koa-body')());
router.use('/api/todos', require('./todos'));

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001);
