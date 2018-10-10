import React, { Component } from 'react'

export default url => WrappedComponent =>
  class extends Component {
    state = {
      data: []
    }

    componentDidMount() {
      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
    }

    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }
