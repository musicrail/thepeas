import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ pageTitle }) => {
  const query = useStaticQuery(
      graphql`query {
      site {
        siteMetadata {
          title
        }
      }
    }`
    )

  return (
    <div>
      <header>{query.site.siteMetadata.title}</header>
    </div>
  )
}

export default Seo