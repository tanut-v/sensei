import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

export default class From extends Component {
  render() {
    return (
      <Formik
        initValue={{ title: '', content: '', imageUrl: '' }}
        validationSchema={
          yup.object().shape({
            title: yup.string().required(),
            content: yup.string().required(),
            imageUrl: yup.string().required()
          })
        }
        onSubmit={value => console.log(value)}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlue,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Enter title..."
                onChange={handleChange}
                value={values.title}
              />
              <input
                type="text"
                name="content"
                placeholder="Enter content..."
                onChange={handleChange}
                value={values.content}
              />
              <input
                type="hidden"
                name="imageUrl"
                onChange={handleChange}
                value={values.imageUrl}
              />
            </div>
            <button type="submit">Create</button>
          </form>
        )}
      />
    );
  }
}
