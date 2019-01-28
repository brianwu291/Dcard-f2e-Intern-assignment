import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component{
  componentDidMount(){
    this.props.renderInitTodo()
  }
  render(){
    return(
      <div className="ui text container" style={{ marginTop: '5vh' }}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default connect(null, actions)(App)
