import React from "react"

import 'typeface-roboto'
import "./layout.css"

import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

export default ({ children }) =>
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>