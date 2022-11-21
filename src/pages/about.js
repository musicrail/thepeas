import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <Seo pageTitle="avozt" />
      <p>this is an about page</p>
    </Layout>
  );
};

export const Head = () => <title>About me</title>;

export default AboutPage;
