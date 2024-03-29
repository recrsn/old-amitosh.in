import React from "react"

import Layout from "../components/Layout"
import SeoMetadata from "../components/SeoMetadata"

const NotFoundPage = () => (
  <Layout>
    <SeoMetadata title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
