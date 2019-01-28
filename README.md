# Todo List

這份作業是從 Redux 的 [Todo List](https://redux.js.org/basics/example) 延伸，請改寫原本的程式碼，串接對應的 API，文件列在下方，您不需要實作也不應該修改 server-side 的程式碼，如果有任何問題歡迎來信詢問。<br><br>

*拉到檔案最下方，有新增串接 API 之後的程式碼架構圖，以方便您們檢查*

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
## Project Struture

以下是串接 API 後的專案架構<br>

```
├── README.md                            # 簡易說明文件
├── package.json                         # 專案資訊
├── package-lock.json                    # 各種 package、dependency 安裝資訊
├── .gitignore                           # 控制不上傳 GitHub
│
├── /public                              # 存放 html 檔案
│     │
│     └── index.html                     # React render 的 .html file.
│
├── /node_modules                        # 各種 package、depenency source code
│
└── /src                                 # 前端 React.js file (components)
    │
    ├── index.js                         # 專案 render 起點
    │
    ├── /actions                         # 存放 acion creator，handle API 串接
    │     │
    │     ├── index.js                   # 負責輸出所有 action
    │     ├── todoActions.js             # handle 作業要求的 API 串接
    │     └── todoActionType.js          # 輸出 action-type 字串變數，避免 typo
    │
    ├── /components                      # 存放所有 react 笨元件
    │     │
    │     ├── App.js                     # 頂層元件，引入 redux、redux-thunk
    │     │                            
    │     ├── /todobuttons               # 存放 todo item 的編輯與刪除元件
    │     │    ├── DeleteButton.js       # 刪除按鈕元件
    │     │    └── EditInput             # 編輯表單與按鈕按鈕元件
    │     │     
    │     ├── Footer.js                  # 切換 todo item 顯示狀態欄
    │     │
    │     │
    │     ├── Link.js                    # 切換 todo item 的按鈕元件
    │     │
    │     │
    │     ├── Todo.js                    # todo item 元件
    │     │
    │     └──TodoList.js                 # 包裹所有 todo item 的元件
    │     
    ├── /containers                      # 存放包裹笨元件的以跟 Redux 溝通的元件  
    │     │
    │     ├── AddTodo.js                 # Render todo item 的元件
    │     │
    │     ├── FilterLink.js              # 包裹 Link 元件，使它取得 Redux 的 state
    │     │
    │     └── VisibleTodoList.js         # 包裹 TodoList 元件，使它取得 Redux 的 state
    │
    └── /reducers                        # 接收 dispatch 來的 action 或函數，處理後傳回 redux   
          │
          ├── index.js                   # 把兩個 reducer 結合輸出，並命名 state 的 key name
          │
          ├── todos.js                   # handle 所有與 todo item 直接相關的 state
          │
          └── visibilityFilter.js        # handle 與 todo item 狀態顯示的 state
```
