import React, { Component } from 'react'

let globalState = {}

const handleState = {
  getState(key) {
    return globalState[key]
  },
  setState(state) {
    globalState = { ...state, ...globalState }
  }
}

const withState = WrappedComponent => class extends Component {
  render() {
    return(
      <WrappedComponent state={handleState} />
    )
  }
}

export default withState
