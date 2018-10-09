import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

class HelloWorld extends Component {
  render () {
    return (
      <Fragment>
        <div>
          Hi: {this.props.greeting}
        </div>
      </Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
