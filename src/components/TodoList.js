import React from 'react'
import Todo from './Todo'

import { connect } from 'react-redux'
import * as actions from '../actions'

import EditInput from './todobuttons/EditInput'
import DeleteButton from './todobuttons/DeleteButton'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return(
    <div className="ui relaxed divided list">
    {todos.map(todo =>
      <div key={todo.id} 
        style={{
          display:'flex',
          justifyContent: 'space-between',
          margin: '10px 0'
        }}>
        <Todo
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
        <div style={{
          display:'flex',
          justifyContent: 'end'
        }}>
          <EditInput id={todo.id} completed={todo.completed}/>
          <DeleteButton deleteTodo={deleteTodo} id={todo.id}/>
        </div>
      </div>
    )}
  </div>
  )
}

export default connect(null, actions)(TodoList)
