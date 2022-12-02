import React from "react"
import Layout from "components/Layout"
import { GlobalStyle } from "components/GlobalStyle"

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </>
)