import React, { Component } from 'react'
import classNames from 'classnames'

import withState from '../../lib/with_state'
import styles from './alert.module.css'

class Header extends Component {
  state = {
    flashMessage: this.props.state.getState('flashMessage') || {}
  }

  onDismiss = (event) => {
    event.preventDefault()
    this.setState({ flashMessage: null })
  }

  render() {
    const { type, message } = this.state.flashMessage
    const flashMessageClasses = classNames(styles[type], 'flashMessage')

    return (
      <div className={flashMessageClasses}>
        <span>{message}</span>
        <a href="#" onClick={this.onDismiss} className={styles.closeButton}>x</a>
      </div>
    )
  }
}

export default withState(Header)
