import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Gallery from '../components/Gallery/Gallery'

export default () => 
  <StaticQuery 
    query={graphql`
      {
        allContentfulMetamorfozy {
          edges {
            node {
              metamorfozy {
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
          title='Psie metamorfozy'
          description='Chcesz, żeby Twój pies zmienił się z gąsienicy w pięknego motyla? Zobacz, jak pies może się wspaniale zmienić po kilku godzinach pielęgnacji!'
        />
        <Gallery data={data.allContentfulMetamorfozy.edges[0].node.metamorfozy} maxImages={4} title="Metamorfozy" />
      </Layout>
    }
  />