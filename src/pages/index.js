import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>this is the main landing page.</p>
      <StaticImage
        src='../images/dog.jpeg' 
        alt='Dog'
      />
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>My Page</title>
    <meta name='description' content='My site'/>
    {/* add seo later (in an extra file, see gatsby docs)*/}
  </>
)

export default IndexPage