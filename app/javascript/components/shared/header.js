import React, { Component } from 'react';

import withState from '../../lib/with_state'

class Header extends Component {
  state = {
    flashMessage: this.props.state.getState('flashMessage')
  }

  onDismiss = () => {
    this.setState({ flashMessage: '' })
  }

  render() {
    const flashMessage = this.state.flashMessage

    return (
      <div>
        {flashMessage}
        <button onClick={this.onDismiss}>x</button>
      </div>
    )
  }
}

export default withState(Header)
