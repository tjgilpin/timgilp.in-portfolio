import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "360"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#umg" imgsize={data.umgMobilePayment.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    umgMobilePayment: file(relativePath: { regex: "/umg-mobile-payment/" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }  
`
