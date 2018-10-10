import React, { Component } from 'react'

export default class extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }

  render() {
    return this.props.children(this.state.data)
  }
}
