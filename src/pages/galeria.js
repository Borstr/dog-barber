import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Gallery from '../components/Gallery/Gallery'

export default () => 
  <StaticQuery 
    query={graphql`
      {
        allContentfulGaleria {
          edges {
            node {
              galeria {
                fluid(maxHeight: 300) {
                  src,
                  srcSet,
                  sizes,
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `}
    render={data => 
      <Layout>
        <SEO
          title='Galeria psich gwiazd Bryś'
          description='Zobacz, jak pięknie może wyglądać Twój pies, jeśli tylko zdecydujesz się przyprowadzić go do psiego salonu Bryś. Kilka godzin i Twój pies też może tak wyglądać.'
        />
        <Gallery data={data.allContentfulGaleria.edges[0].node.galeria} title="Galeria" />
      </Layout>
    }
  />