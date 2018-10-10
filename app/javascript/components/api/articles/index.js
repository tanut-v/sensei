import React, { Component, Fragment } from 'react'

class Index extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
      // this.fetchPosts()
  }

  // fetchPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then( res => res.json() )
  //     .then( posts => this.setState({ articles: posts }) )
  // }

  render() {
    return (
      <Fragment>
        Articles Index
      </Fragment>
    )
  }
}

export default Index
