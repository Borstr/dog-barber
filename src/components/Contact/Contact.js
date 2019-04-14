import React from 'react'
import styled from 'styled-components'

export default ({ data, image: { src, srcSet, sizes } }) =>
  <Section>
    <Title>Kontakt</Title>
    <Paragraph dangerouslySetInnerHTML={{ __html: data }}></Paragraph>
    <a href="tel:501372709"><Image src={src} sizes={sizes} srcSet={srcSet} alt="Pies ze słuchawką" /></a>
  </Section>

  
const Image = styled.img`
  border: 3px solid #FECD05;
  width: 350px;
  max-width: 100%;
  margin: 4px auto;
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .12), 0 0 8px rgba(0, 0, 0, .24);
`

const Section = styled.section`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #629A01; /*F3D645*/
  padding-top: 68px;
`

const Title = styled.h2`
  color: #FECD05;
  text-shadow: 0 0 6px rgba(0, 0, 0, .7);
  font-size: 70px;
  margin: 10px;

  @media(max-width: 1000px) {
    font-size: 50px;
  }
`

const Paragraph = styled.address`
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  margin: 10px;
  text-align: center;

  @media(max-width: 1000px) {
    font-size: 18px;
  }

  & a {
    color: #fff;
  }
`