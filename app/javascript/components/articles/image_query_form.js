import React, { Component, Fragment } from 'react'
import ImageQuery from './image_query'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

const TOKEN = "f8fc98547de8cae9505eaf69ca6470df9c2650c69ee5ce0a3bca48f6a9c3dde6"
const URL = "https://api.unsplash.com/search/photos"

Modal.setAppElement('body')

export default class ImageQueryForm extends Component {
  state = {
    query: '',
    imageUrl: 'https://lexiconcss.wedeploy.io/images/thumbnail_placeholder.gif',
    modalIsOpen: false,
    imageUrls: []
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  afterOpenModal = () => {
    fetch(`${URL}?query=${this.state.query}&client_id=${TOKEN}`)
      .then(res => res.json())
      .then(data => data.results)
      .then(results => results.map(result => result.urls.thumb))
      .then(urls => this.setState({ imageUrls: urls }))
  }

  onQueryChange = event => {
    this.setState({ query: event.target.value })
  }

  onQueryImage = event => {
    this.openModal()
  }

  onSelectImage = url => event => {
    this.setState({ imageUrl: url })
    this.closeModal()
  }

  render() {
    return (
      <Fragment>
        <div>
          <img src={this.state.imageUrl} onClick={this.onQueryImage}/>
          <input type="text" onChange={this.onQueryChange}/>
        </div>

        <div id="queryModal">
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Select Image</h2>
            <button onClick={this.closeModal}>close</button>
              {
                this.state.imageUrls.map(url =>
                  <img src={url} onClick={this.onSelectImage(url)}/>
                )
              }
          </Modal>
        </div>
      </Fragment>
    )
  }
}
