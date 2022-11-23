import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { postLastModified } from "./blog.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog posts">
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.name}</h2>
              <p>Posted: {node.frontmatter.datePublished}</p>
              <p>{node.excerpt}</p>
              <p className={postLastModified}>Last modified on: {node.parent.modifiedTime}</p>
            </article>
          ))
        }
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx (sort: { frontmatter: { datePublished: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          name
          datePublished(formatString: "MMMM D, YYYY")
        }
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo pageTitle="Blog posts" />

export default BlogPage;
