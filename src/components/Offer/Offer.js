import React from 'react'
import styled from 'styled-components'

import Description from '../Description/Description'

export default ({ data, image: { fluid: { src, srcSet, sizes }}}) => 
  <Section>
    <Title>Oferta usług pielęgnacyjnych</Title>
    <Description html={data}/>
    <Image src={src} sizes={sizes} srcSet={srcSet} alt="Pięknie ostrzyżony pies" />
  </Section>

const Section = styled.section`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #99000C; /*F3D645*/
`

const Image = styled.img`
  border: 3px solid #FECD05;
  width: 350px;
  max-width: 100%;
  margin: 4px auto;
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .12), 0 0 8px rgba(0, 0, 0, .24);
`

const Title = styled.h2`
  color: #FECD05;
  text-shadow: 0 0 6px rgba(0, 0, 0, .7);
  font-size: 70px;
  margin: 10px;
  text-align: center;
  
  @media(max-width: 1000px) {
    font-size: 40px;
  }
`