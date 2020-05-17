import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Masthead = () => {
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: { eq: "images/bg-masthead.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="Masthead"
    />
  )
}

Masthead.propTypes = {
  masthead: PropTypes.bool,
}

Masthead.defaultProps = {
  masthead: false,
}

export default Masthead
