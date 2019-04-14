import React from 'react'

import styled from 'styled-components'

import Image from '../Image/Image'

export default ({data, title}) => 
  <Section>
    <Title>{title}</Title>
    {data.map((item, i) => <Image data={item} key={i} />)}
  </Section>

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
  padding: 68px 16px;
  background-color: #F4E3AD;

  @media(max-width: 1000px) {
    padding: 68px 8px;
  }
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 80px;
  text-shadow: 0 0 6px rgba(0, 0, 0, .7);

  @media(max-width: 1000px) {
    font-size: 40px;
  } 
`