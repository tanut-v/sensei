import React, { Component, Fragment } from 'react'

class TodoForm extends Component {
  state = {
    text: ''
  }

  onChangeText = event => {
    this.setState({ text: event.target.value })
  }

  onAddTodo = () => {
    this.props.onSubmit(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <Fragment>
        <input
          type="text"
          placeholder="Enter sth..."
          onChange={this.onChangeText}
          value={this.state.text}
        />
        <button onClick={this.onAddTodo}>Add</button>
      </Fragment>
    )
  }
}

export default TodoForm
