import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const NotFoundPage = () => 
  <Layout>
    <SEO title="404, zły adres"
      description="Nie znajdziesz nic pod tym adresem, ale sprawdź nawigację, to na pewno znajdziesz to, czego szukasz."
    />
    <Section>
      <Title>Pustka</Title>
      <Paragraph>Nie znajdziesz nic pod tym adresem, ale sprawdź nawigację, to na pewno znajdziesz to, czego szukasz.</Paragraph>
    </Section>
  </Layout>

const Section = styled.section`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #E8C268; /*F3D645*/
`

const Paragraph = styled.p`
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  margin: 10px;

  @media(max-width: 1000px) {
    font-size: 18px;
  }
`

const Title = styled.h2`
  color: #8FCADE;
  text-shadow: 0 0 6px rgba(0, 0, 0, .7);
  font-size: 70px;
  margin: 10px;
  
  @media(max-width: 1000px) {
    font-size: 50px;
  }
`

export default NotFoundPage
