const Router = require('koa-router');

const router = new Router();
const todos = [];

async function validateBody(ctx, next) {
  if (ctx.request.body && ctx.request.body.text) {
    return await next();
  }

  ctx.status = 400;
  ctx.body = {error: `"text" is required`};
}

router.param('id', async (id, ctx, next) => {
  const todo = todos[ctx.params.id - 1];

  if (todo && !todo.deleted) {
    ctx.state.todo = todo;
    await next();
  } else {
    ctx.status = 404;
    ctx.body = {error: 'Not found'};
  }
});

router.get('/', ctx => {
  ctx.body = todos.filter(todo => !todo.deleted);
});

router.post('/', validateBody, ctx => {
  const todo = {...ctx.request.body, deleted: false, id: todos.length + 1};
  todos.push(todo);
  ctx.status = 201;
  ctx.body = todo;
});

router.get('/:id', ctx => {
  ctx.body = ctx.state.todo;
});

router.put('/:id', validateBody, ctx => {
  const todo = {...ctx.state.todo, ...ctx.request.body};
  ctx.body = todo;
});

router.delete('/:id', ctx => {
  ctx.state.todo.deleted = true;
  ctx.status = 204;
});

module.exports = router.routes();
