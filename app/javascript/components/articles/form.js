import React, { Component, Fragment } from 'react'
import Modal from 'react-modal';
import { Formik } from 'formik';
import * as yup from 'yup';

const TOKEN = 'ae62c96eb3a5098b33652be2deb06e7e9b7171cab306a8ede3e8efb8a24387ea'
const URL = "https://api.unsplash.com/search/photos"

Modal.setAppElement('body')

export default class Form extends Component {
  state = {
    imgUrls: [],
    modalIsOpen: false,
    currentImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVqlz5Nqg9_qijlfkqME9PaXwXtYjH6__3F8Bu2xXgu6JJrHO',
    query: ''
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    fetch(`${URL}?query=${this.state.query}&client_id=${TOKEN}`)
      .then(res => res.json())
      .then(data => data.results)
      .then(results => results.map(result => result.urls.thumb))
      .then(urls => this.setState({ imgUrls: urls }))
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  onQueryChange = (event) => {
    this.setState({ query: event.target.value })
  }

  handleImageClick = (event) => {
    this.setState({ currentImg: event.target.src })
    this.closeModal()
  }

  updateState = (values) => {
    this.props.onSubmit({ ...values, 'image_url': this.state.currentImg })
  }

  renderImgs = () => {
    const { imgUrls } = this.state

    return(
      <div style={{width: '100%', textAlign: 'center'}}>
        {imgUrls.map(
          url =>
            <span
            style={{width: '40%'}}
            key={url}>
              <img
              src={url}
              onClick={this.handleImageClick}/>
            </span>
        )}
      </div>
    )
  }

  renderModal = () => {
    const { currentImg, modalIsOpen } = this.state

    return (

      <div style={{width: '40%'}}>
        <img
        src={currentImg}
        onClick={this.openModal}
        />
        <input type="text" onChange={this.onQueryChange}/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel='Example Modal'
        >
          <h2>Images</h2>
          {this.renderImgs()}
        </Modal>
      </div>
    )
  }

  renderForm = () => {
    return (
      <div style={{width: '60%'}}>
        <Formik
          initialValues={{ title: '', content: '' }}
          onSubmit={values => this.updateState(values)}
          validationSchema={
            yup.object().shape({
              title: yup.string().required(),
              content: yup.string().required()
            })
          }
          render={({
            handleSubmit,
            handleBlur,
            handleChange,
            errors,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="title" style={{ display: 'block' }}>
                Title
              </label>
              <input
                id="title"
                placeholder="Enter some title"
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
              <label htmlFor="content" style={{ display: 'block' }}>
                Content
              </label>
              <input
                id="content"
                placeholder="Enter some content"
                type="text"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              {errors.content && touched.content && errors.content}
              <button type="submit" >
                Submit
              </button>
            </form>
          )}>
        </Formik>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <div style={{display: 'flex', width: '100%'}}>
          {this.renderModal()}
          {this.renderForm()}
        </div>
      </Fragment>
    );
  }
}
