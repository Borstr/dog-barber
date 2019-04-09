import React from "react"

import { StaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Info from '../components/Info/Info'
import Offer from '../components/Offer/Offer'

export default () =>
  <StaticQuery 
    query={graphql`
      {
        allContentfulDom {
          edges {
            node {
              salon {
                childMarkdownRemark {
                  html
                }
              }
              informacje {
                childMarkdownRemark {
                  html
                }
              }
              oferta {
                childMarkdownRemark {
                  html
                }
              }
              ofertaZdjecie {
                fluid(maxWidth: 350) {
                  src,
                  srcSet,
                  sizes
                }
              }
              informacjeZdjecie {
                fluid(maxWidth: 350) {
                  src,
                  srcSet,
                  sizes
                }
              }
              salonZdjecie {
                fluid(maxWidth: 350) {
                  src,
                  srcSet,
                  sizes
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulDom: { edges: [{ node: { salon, informacje, oferta, ofertaZdjecie, informacjeZdjecie, salonZdjecie }}]}}) => 
      <Layout>
        <SEO 
          title="Bryś - psi salon fryzjerski"
          description='W tym miejscu Twój pies zobaczy, co to szczęście, a po kilku godzinach pielęgnacji wyjdzie pięknie ostrzyżony, pachnący, a co najważniejsze - szczęśliwy.'
        />
        <Hero />
        <About data={salon.childMarkdownRemark.html} image={salonZdjecie} />
        <Info data={informacje.childMarkdownRemark.html} image={informacjeZdjecie} />
        <Offer data={oferta.childMarkdownRemark.html} image={ofertaZdjecie} />
      </Layout>
    }
  />
  
