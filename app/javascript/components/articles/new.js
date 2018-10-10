import React, { Component, Fragment } from 'react'
import Form from './form'
import ImageQueryForm from './image_query_form'

export default class NewArticle extends Component {
  render() {
    return (
      <Fragment>
        <ImageQueryForm/>
        <Form/>
      </Fragment>
    );
  }
}
