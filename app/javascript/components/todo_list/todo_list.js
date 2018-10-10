import React, { Component, Fragment } from 'react'

import TodoForm from './form'
import List from './list'

class TodoList extends Component {
  state = {
    todos: []
  }

  onAddTodo = text => {
    const todo = { text, id: +new Date() }

    this.setState({ todos: [todo, ...this.state.todos] })
  }

  render() {
    return (
      <Fragment>
        <List todos={this.state.todos} />
      </Fragment>
    )
  }
}

export default TodoList
