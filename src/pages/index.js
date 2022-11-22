import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>this is the main landing page.</p>
      <StaticImage src="../images/dog.jpeg" alt="Dog" />
    </Layout>
  );
};

export const Head = () => <Seo pageTitle="Home Page" />

export default IndexPage;
