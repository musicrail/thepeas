import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ pageTitle }) => {
  const gql = graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;

  const query = useStaticQuery(gql);

  return (
      <header>{query.site.siteMetadata.title}</header>
  );
};

export default Seo;
