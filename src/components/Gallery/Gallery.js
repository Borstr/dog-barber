import React from 'react'

import styled from 'styled-components'

import Image from '../Image/Image'

export default ({ data, title, maxImages = 8 }) => {
  const [ currentImages, incrementImages ] = React.useState(maxImages)
  const [ areAllImagesShown, setAllImagesShown ] = React.useState(false)
  const [ currentData, setData ] = React.useState([ ...data ].splice(0, maxImages))
  console.log(currentImages)
  function loadMoreImages() {
    let nextImages = currentImages + maxImages
    if(nextImages > data.length) {
      nextImages = data.length
      setAllImagesShown(true)
    }
    
    setData([ ...data ].splice(0, nextImages))
    incrementImages(nextImages)
  }
  
  return (
    <Section>
      <Title>{title}</Title>
      <Subcontainer>
      {currentData.map((item, i) => <Image data={item} key={i} />)}
      </Subcontainer>
      <LoadButton onClick={loadMoreImages} disabled={areAllImagesShown}>
        {!areAllImagesShown ? 'Załaduj więcej zdjęć' : 'Koniec'}
      </LoadButton>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 68px 16px;
  background-color: #F4E3AD;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 1000px) {
    padding: 68px 8px;
  }
`

const Subcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const LoadButton = styled.button`
  margin-top: 32px;
  width: 200px;
  height: 48px;
  color: #fff;
  background-color: hsl(48 99% 51%);
  cursor: pointer;
  box-shadow: 0 0 3px rgba(0, 0, 0, .12), 0 0 5px rgba(0, 0, 0, .24);
  border: none;
  border-radius: 2px;
  font-weight: bold;
  text-transform: lowercase;
  font-size: 20px;
  transition: background-color 300ms ease-in-out;

  &:hover, &:focus {
    background-color: hsl(48 99% 71%);
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
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