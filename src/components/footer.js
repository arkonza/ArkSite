import React from 'react'
import footerStyles from "../styles/footer.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: { eq: "images/sponsor.png" }) {
              childImageSharp {
                  fluid(maxWidth: 380, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <footer>
      <span>
        © {new Date().getFullYear()}, Created by
        {` `}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://ryanskinner.co.za">
          RS_
        </a>
      </span>
      <div>
        <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Powered By RS_"
        className={footerStyles.sponsor}
      />
      </div>
    </footer>
  )
}

export default Footer
