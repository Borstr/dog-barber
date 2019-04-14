import React from 'react'
import styled from 'styled-components'

export default ({html, color, noShadow}) => 
  <Container color={color} noShadow={noShadow} dangerouslySetInnerHTML={{ __html: html }} />


const Container = styled.div`
  color: ${({color}) => color ? color : '#fff'};
  font-size: 20px;
  ${({noShadow}) => !noShadow ? 'text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);' : ''}
  width: 500px;
  max-width: 100%;
  margin: 10px;

  & p, & ul {
    width: 500px;
    max-width: 100%;
    margin: 8px 0;
  }

  & p {
    text-align: center;
  }

  @media(max-width: 1000px) {
    font-size: 18px;
  }
`