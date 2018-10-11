import React, { Fragment } from 'react'
import styles from './image_renderer.module.css'

const ImageRenderer = ({ imgUrls, onImageClick }) => (
  <Fragment>
    <h2>Images</h2>
    <div className={styles.container}>
      {imgUrls.map(
        url =>
          <span
          key={url}>
            <img
            className={styles.img}
            src={url}
            onClick={onImageClick}/>
          </span>
      )}
    </div>
  </Fragment>
)

export default ImageRenderer
