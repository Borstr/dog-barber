import React from 'react'
import styled from 'styled-components'

export default () =>
  <Container>
    <Fb 
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBRY%25C5%259A-strzy%25C5%25BCenie-ps%25C3%25B3w-125966824427539&tabs&width=340&height=181&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
      width="340" 
      height="181" 
      scrolling="no" 
      frameborder="0" 
      allowTransparency="true" 
      allow="encrypted-media"
    ></Fb>
  </Container>

const Fb = styled.iframe`
  border: none;
  overflow: hidden;
`

const Container = styled.aside`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
`