import React, { Component, Fragment } from 'react'

import ImageSelectorModal from './image_selector_modal'
import ArticleForm from './article_form'

const DEFAULT_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVqlz5Nqg9_qijlfkqME9PaXwXtYjH6__3F8Bu2xXgu6JJrHO'

export default class ArticleFormWrapper extends Component {
  state = {
    modalIsOpen: false,
    imgUrls: [],
    currentImg: DEFAULT_IMAGE,
    query: ''
  }

  onSelectImage = (value) => {
    this.setState({ currentImg: value })
  }

  toggleModal = () => {
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

  onQueryChange = (event) => {
    this.setState({query: event.target.value})
  }

  render() {
    const { modalIsOpen, query, currentImg } = this.state

    return (
      <Fragment>
        <div style={{display: 'flex', width: '100%'}}>
          <img
          src={currentImg}
          onClick={this.toggleModal}
          />
          <input type="text" onChange={this.onQueryChange}/>
          {modalIsOpen && <ImageSelectorModal query={query} onSelectImage={this.onSelectImage} onCloseModal={this.toggleModal}/>}
          <ArticleForm onSubmit={this.props.onSubmit} currentImg={currentImg} />
        </div>
      </Fragment>
    );
  }
}
