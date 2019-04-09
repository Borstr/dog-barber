import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Contact from '../components/Contact/Contact'

export default () => 
  <StaticQuery 
    query={graphql`
      {
        allContentfulKontakt {
          edges {
            node {
              kontakt {
                childMarkdownRemark {
                  html
                }
              }
              image {
                fluid {
                  src
                  sizes
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulKontakt: { edges: [ { node: { kontakt, image }}]}}) => 
      <Layout>
        <SEO
          title='Skontaktuj się, jeśli chcesz wypięknić swojego psa.'
          description='Chcesz zapewnić swojemu psu chwilę luksusu i sprawić, że będzie wyglądać, jak milion dolarów? Skontaktuj się z nami i umów się na wizytę!'
        />
        <Contact data={kontakt.childMarkdownRemark.html} image={image.fluid}/>
      </Layout>
    }
  />