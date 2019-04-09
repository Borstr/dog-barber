import React, { useState } from 'react'

import { Link } from 'gatsby'

import styled from 'styled-components'

import { Bars } from '../svgs/Svgs'

export default () => {
  const [ shouldShow, triggerNav ] = useState(null)
  
  return (
    <>
      <Nav>
        <H1>Bryś - psi salon fryzjerski</H1>
        <NavList shouldShow={shouldShow}>
          <Item>
            <NavLink to='/'>Strona Główna</NavLink>
          </Item>
          <Item>
            <NavLink to='/galeria'>galeria</NavLink>
          </Item>
          <Item>
            <NavLink to='/metamorfozy'>metamorfozy</NavLink>
          </Item>
          <Item>
            <NavLink to='/kontakt'>kontakt</NavLink>
          </Item>
        </NavList>
        <BarButton onClick={() => triggerNav(!shouldShow)} aria-label='open navigation'><Bars /></BarButton>
      </Nav>
      <Background onClick={() => triggerNav(false)} shouldShow={shouldShow} aria-label='close navigation'></Background>
    </>
  )
}

const BarButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  display: none;

  @media(max-width: 1000px) {
    display: block;
  }
`

const Background = styled.button`
  display: ${({shouldShow}) => shouldShow ? 'block' : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  background-color: rgba(0, 0, 0, .6);
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media(max-width: 1000px) {
    position: fixed;
    left: ${({shouldShow}) => shouldShow ? '0' : '-80vw'};
    top: 58px;
    width: 80vw;
    background-color: #FFC0CB;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100vh - 58px);
    animation: ${({shouldShow}) => shouldShow ? 'moveIn' : shouldShow !== null ? 'moveOut' : ''} 500ms linear;
  }

  @keyframes moveIn {
    from { left: -80vw }
    to { left: 0 }
  }

  @keyframes moveOut {
    from { left: 0 }
    to { left: -80vw }
  }
`

const Item = styled.li`
  line-height: 48px;
  height: 48px;

  @media(max-width: 1000px) {
    height: calc((100vh - 98px) / 4);
    line-height: calc((100vh - 98px) / 4);
    border-top: 2px solid #dda0a9;
    width: 100%;
  }
`

const NavLink = styled(Link)`
  display: block;
  line-height: 48px;
  height: 48px;
  padding: 0 8px;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  text-transform: lowercase;
  font-weight: bold;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  transition: 300ms;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  @media(max-width: 1000px) {
    height: calc((100vh - 98px) / 4);
    line-height: calc((100vh - 98px) / 4);
    width: 100%;
  }
`

const Nav = styled.nav`
  width: 100vw;
  height: 48px;
  background-color: #FFC0CB;
  position: fixed;
  top: 10px;
  left: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.24), 0 0 8px rgba(0, 0, 0, 0.48);
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;

  @media(max-width: 500px) {
    padding: 0 8px;
  }
`

const H1 = styled.h1`
  color: #fff;
  font-size: 35px;
  margin: 0;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  @media(max-width: 500px) {
    font-size: 20px;
  }
`
