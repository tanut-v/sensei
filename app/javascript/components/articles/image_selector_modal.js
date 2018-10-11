import React, { Component } from 'react';
import Modal from 'react-modal';

import ImageRenderer from './image_renderer'

const TOKEN = 'ae62c96eb3a5098b33652be2deb06e7e9b7171cab306a8ede3e8efb8a24387ea'
const URL = "https://api.unsplash.com/search/photos"

Modal.setAppElement('body')

export default class ImageSelectorModal extends Component {
  state = {
    imgUrls: []
  }

  componentDidMount() {
    fetch(`${URL}?query=${this.props.query}&client_id=${TOKEN}`)
      .then(res => res.json())
      .then(data => data.results)
      .then(results => results.map(result => result.urls.thumb))
      .then(urls => this.setState({ imgUrls: urls }))
  }

  onCloseModal = () => {
    this.props.onCloseModal()
  }

  onQueryChange = (event) => {
    this.setState({ query: event.target.value })
  }

  onImageClick = (event) => {
    this.props.onSelectImage(event.target.src)
    this.onCloseModal()
  }

  render() {
    return (
      <div style={{width: '40%'}}>
        <Modal
          isOpen={true}
          onRequestClose={this.onCloseModal}
          contentLabel='Example Modal'
        >
          <ImageRenderer onImageClick={this.onImageClick} imgUrls={this.state.imgUrls}/>
        </Modal>
      </div>
    )
  }
}
