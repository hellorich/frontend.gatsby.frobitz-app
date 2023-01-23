import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"

export default function Page({ data: { wpPage } }) {
  const { title, content } = wpPage;
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`