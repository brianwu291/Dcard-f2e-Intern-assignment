import axios from 'axios';
import {
  INIT_TODO,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO
} from './todoActionTypes'

export const renderInitTodo = () => async dispatch => {
  const result = await axios.get('/api/todos')
  const initTodos = result.data
  initTodos.forEach(item => {
    dispatch({
      type: INIT_TODO,
      id: item.id,
      text: item.text
    })
  })
}

export const addTodo = text => async dispatch => {
  const reqText = { "text": text }
  const result = await axios.post('/api/todos', reqText)
    dispatch({
      type: ADD_TODO,
      id: result.data.id,
      text: result.data.text
    })
}

export const editTodo = (text, id, bool) => async dispatch => {
  const reqText = { "text": text }
  const result = await axios.put(`/api/todos/${id}`, reqText)
  dispatch({
    type: EDIT_TODO,
    id: result.data.id,
    text: result.data.text,
    completed: bool
  })
}

export const deleteTodo = id => async dispatch => {
  await axios.delete(`/api/todos/${id}`)
  dispatch({
    type: DELETE_TODO,
    id
  })
}