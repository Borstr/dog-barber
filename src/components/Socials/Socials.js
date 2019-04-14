import React from 'react'
import styled from 'styled-components'

export default () => {
  const [ shouldAnimate, triggerAnimation ] = React.useState(null)
  
  return (
    <Container onMouseEnter={() => shouldAnimate === null && triggerAnimation(true)} shouldAnimate={shouldAnimate}>
      <Fb 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBRY%25C5%259A-strzy%25C5%25BCenie-ps%25C3%25B3w-125966824427539&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="340" 
        height="210" 
        scrolling="no" 
        frameborder="0" 
        allowTransparency="true" 
        allow="encrypted-media"
      ></Fb>
      <FbLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
        <path fill="#fff" d="M53.85,0H3.15A3.15,3.15,0,0,0,0,3.15v50.7A3.15,3.15,0,0,0,3.15,57h27.3V35H23V26.33h7.41V20c0-7.37,4.49-11.38,11.06-11.38A62.15,62.15,0,0,1,48.15,9v7.69H43.61c-3.57,0-4.26,1.69-4.26,4.18v5.5H47.9L46.79,35H39.35V57h14.5A3.15,3.15,0,0,0,57,53.85V3.15A3.15,3.15,0,0,0,53.85,0Z"/>
      </FbLogo>
    </Container>
  );
}

const Fb = styled.iframe`
  border: none;
  overflow: hidden;
  left: 0;
  margin: 0;
`;

const FbLogo = styled.svg`
  width: 50px;
  cursor: pointer;

  @media(max-width: 799px) {
    display: none; 
  }
`;

const Container = styled.aside`
  @media(min-width: 800px) {
    width: 390px;
    display: flex;
    align-items: flex-start;
    position: fixed;
    left: -340px;
    top: 100px;

    &:hover {
      animation: moveIn 300ms linear;
      animation-fill-mode: forwards;
    }

    &:not(:hover) {
      ${({shouldAnimate}) => shouldAnimate !== null  && 'animation: moveOut 300ms linear;'}
    }

    @keyframes moveIn {
      from { left: -340px }
      to { left: 0 }
    }

    @keyframes moveOut {
      from { left: 0 }
      to { left: -340px }
    }
  }

  @media(max-width: 799px) {
    text-align: center;
    max-height: 210px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .24);
  }
`;