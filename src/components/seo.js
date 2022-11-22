import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ pageTitle }) => {
  const data = graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title,
          siteUrl,
          description
        }
      }
    }
  `

  const query = useStaticQuery(data)

  return (
      <header>{pageTitle} | {query.site.siteMetadata.title}</header>
  )
}

export default Seo