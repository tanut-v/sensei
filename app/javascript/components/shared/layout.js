import React, { Component, Fragment } from 'react'
import Header from './header'

const Layout = ({ children }) => (
  <Fragment>
    <Header/>
    {children}
  </Fragment>
)

export default Layout
