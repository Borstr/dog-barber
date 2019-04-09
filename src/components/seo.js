import React from "react"
import Helmet from "react-helmet"

export default ({ description, title }) =>
  <Helmet
    htmlAttributes={{
      lang: 'pl',
    }}
    title={title}
    meta={
      [
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `keywords`,
          content: 'psi fryzjer, strzyżenie psów'
        }
      ]
    }
  />
