import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Blog posts'>
      <p>Posts will go here.</p>
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