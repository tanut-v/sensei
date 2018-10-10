import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body')

export default class ImageQuery extends Component {
  state = {
    modalIsOpen: false
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div id="queryModal">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}
