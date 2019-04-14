import React, { useState } from 'react'

import styled from 'styled-components'

export default ({ data: { fluid }}) => {
  const [ shouldOpen, triggerZoom ] = useState(false)
  
  const zoomImage = shouldOpen => {
    if(window.innerWidth >= 1000) triggerZoom(shouldOpen);
    else return;
  }
  
  return !shouldOpen
  ? <ImageContainer aria-label="Open image">
      <Image 
        onClick={() => zoomImage(true)} 
        src={fluid.src} 
        sizes={fluid.sizes} 
        srcSet={fluid.srcSet} 
      />
    </ImageContainer>
  : <>
      <ImageContainer aria-label="Open image">
        <Image 
          onClick={() => zoomImage(true)} 
          src={fluid.src} 
          sizes={fluid.sizes} 
          srcSet={fluid.srcSet} 
        />
      </ImageContainer>
      <Background onClick={() => zoomImage(false)} aria-label="Close image">
        <BigImage src={fluid.src} srcSet={fluid.srcSet} sizes={fluid.sizes} />
      </Background>
    </>
}

const ImageContainer = styled.button`
  border: 3px solid #99000C;
  border-radius: 3px;
  margin: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .12), 0 0 16px rgba(0, 0, 0, .24);
  cursor: zoom-in;
  padding: 0;
  transition: 300ms;
  height: 300px;

  @media(min-width: 1000px) {
    &:hover, &:focus {
      transform: scale(1.1);
      border-color: #FECD05;
    }
  }

  @media(max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const BigImage = styled.img`
  position: fixed;
  max-height: 90%;
  max-width: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  border: 3px solid #99000C;
  border-radius: 3px;
  margin: 0;
  padding: 0;
`

const Background = styled.button`
  position: fixed;
  left: 0;
  top: 0;
  cursor: zoom-out;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  padding: 0;
  border: none;
`