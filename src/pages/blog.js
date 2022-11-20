import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Blog posts'>
      {/* <Seo pageTitle={"he"} /> */}
      <ul>
        {
          data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`query {
    allFile {
      nodes {
        name
      }
    }
  }`

export const Head = () => <title>Blog posts</title>

export default BlogPage