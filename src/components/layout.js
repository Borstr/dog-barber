import React from "react"

import 'typeface-roboto'
import "./layout.css"

import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Socials from './Socials/Socials'

export default ({ children }) =>
  <>
    <Nav />
    {/* <Socials /> */}
    <main>{children}</main>
    <Footer />
  </>