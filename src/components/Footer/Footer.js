import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import Socials from '../Socials/Socials'

export default () => 
  <Footer>
    <Socials />
    <Subcontainer>
      <Title>Salon</Title>
      <MapLink to='/'>Strona główna</MapLink>
      <MapLink to='/galeria'>Galeria</MapLink>
      <MapLink to='/metamorfozy'>Metamorfozy</MapLink>
      <MapLink to='/kontakt'>Kontakt</MapLink>
    </Subcontainer>
    <Subcontainer>
      <Title>Pielęgnacja</Title>
    </Subcontainer>
  </Footer>

const Footer = styled.footer`
  width: 100%;
  background-color: #FECD05;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .12), 0 -3px 4px rgba(0, 0, 0, .24);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  padding: 8px 0;
`

const Subcontainer = styled.section`
  width: 400px;
  max-width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  font-size: 30px;
`

const MapLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  padding: 4px 0;
`