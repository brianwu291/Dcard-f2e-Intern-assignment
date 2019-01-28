# Todo List

這份作業是從 Redux 的 [Todo List](https://redux.js.org/basics/example) 延伸，請改寫原本的程式碼，串接對應的 API，文件列在下方，您不需要實作也不應該修改 server-side 的程式碼，如果有任何問題歡迎來信詢問。

## 使用說明

啟動 server，網址是 <http://localhost:3000>

```sh
npm start
```

## API

所有 API routes 都接受並回傳 JSON。

### `GET /api/todos`

列出所有 Todos。

#### Response

200 OK

```js
[
  {
    "id": 1,
    "text": "foo",
    "deleted": false
  },
  {
    "id": 2,
    "text": "bar",
    "deleted": false
  }
]
```

### `POST /api/todos`

建立新的 todo。

#### Request

```js
{
  "text": "foo"
}
```

#### Response

201 Created

```js
{
  "id": 1,
  "text": "foo",
  "deleted": false
}
```

400 Bad Request

```js
{
  "error": "\"text\" is required"
}
```

### `PUT /api/todos/:id`

更新 todo 內容。

#### Request

```js
{
  "text": "foo"
}
```

#### Response

200 OK

```js
{
  "id": 1,
  "text": "foo",
  "deleted": false
}
```

400 Bad Request

```js
{
  "error": "\"text\" is required"
}
```

404 Not Found

```js
{
  "error": "Not found"
}
```

### `DELETE /api/todos/:id`

刪除 todo。

#### Response

204 No Content

```
```

404 Not Found

```js
{
  "error": "Not found"
}
```
