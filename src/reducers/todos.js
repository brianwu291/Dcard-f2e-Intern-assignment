const todos = (state = [], action) => {
  switch (action.type) {
// README.md 要求的四個 API 串接
    case 'INIT_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'EDIT_TODO':
      return(
        state.map(item => {
          if(item.id === action.id){
            return {
              id: action.id, 
              text: action.text,
              completed: action.completed
            }
          }
          return item
        })
      )

    case 'DELETE_TODO':
      const newState = state.filter(item => {
        return item.id !== action.id
      })
      return [...newState]

// underneath are the visible filter
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
