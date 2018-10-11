import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

const ArticleForm = ({ onSubmit, currentImg }) => (
  <div style={{width: '60%'}}>
    <Formik
      initialValues={{ title: '', content: '' }}
      onSubmit={values => onSubmit({ ...values, 'image_url': currentImg })}
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

export default ArticleForm
