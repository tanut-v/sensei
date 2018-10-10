import React from 'react'

import Fetch from '../../lib/Fetch'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const List = () => (
  <Fetch url={BASE_URL}>
    {data => (
      <ul>
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    )}
  </Fetch>
)

export default List
