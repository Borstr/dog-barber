import React from 'react'

import styled from 'styled-components'

import { Comb, Dog, Heart } from '../svgs/Svgs'

export default () =>
  <Section>
    <Subcontainer>
      <Title>
        Bryś<br/> 
         Salon dla psa
      </Title>
    </Subcontainer>
    <Subcontainer>
      <Comb />
      <Symbol>+</Symbol>
      <Dog />
      <Symbol>=</Symbol>
      <Heart />
    </Subcontainer>
  </Section>

const Title = styled.h2`
  color: #fff;
  font-size: 80px;
  text-align: center;
  text-shadow: 0 0 6px rgba(0, 0, 0, .7);

  @media(max-width: 900px) {
    font-size: 50px;
  }

  @media(max-width: 500px) {
    font-size: 40px;
  }
`

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 68px;
  padding-bottom: 20px;
  background-color: #8FCADE; /*#E4CF80*/
  box-shadow: 0 2px 3px rgba(0, 0, 0, .12), 0 3px 4px rgba(0, 0, 0, .24);
`

const Symbol = styled.span`
  font-size: 200px;
  color: #fff;
  
  @media(max-width: 1200px) {
    font-size: 150px;
  }

  @media(max-width: 900px) {
    font-size: 100px;
  }

  @media(max-width: 500px) {
    font-size: 80px;
  }
`

const Subcontainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(50vh - 44px);
`