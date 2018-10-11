import React, { Fragment } from 'react'

const ImageRenderer = ({ imgUrls, onImageClick }) => (
  <Fragment>
    <h2>Images</h2>
    <div style={{width: '100%', textAlign: 'center'}}>
      {imgUrls.map(
        url =>
          <span
          style={{width: '40%'}}
          key={url}>
            <img
            src={url}
            onClick={onImageClick}/>
          </span>
      )}
    </div>
  </Fragment>
)

export default ImageRenderer
