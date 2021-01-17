import React from "react"
import { graphql } from "gatsby"

export default function Page({ data }) {
  const page = data.allWpPage.nodes[0]
  console.log(page)
  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`