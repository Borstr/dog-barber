import React from 'react'
import styled from 'styled-components'

import Description from '../Description/Description'

export default ({ data, image: { fluid: { src, srcSet, sizes }}}) => 
  <Section>
    <Title>O psim salonie</Title>
    <Description html={data}/>
    <Image src={src} sizes={sizes} srcSet={srcSet} alt="Pięknie ostrzyżony pies" />
  </Section>

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #E8C268;
  padding: 16px;
`

const Image = styled.img`
  border: 3px solid #f9a825;
  width: 350px;
  max-width: 100%;
  margin: 4px auto;
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .12), 0 0 8px rgba(0, 0, 0, .24);
`

const Title = styled.h2`
  color: #8FCADE;
  text-shadow: 0 0 6px rgba(0, 0, 0, .7);
  font-size: 70px;
  margin: 10px;
  text-align: center;

  @media(max-width: 1000px) {
    font-size: 40px;
  }
`