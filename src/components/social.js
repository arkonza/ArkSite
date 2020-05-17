import React from "react"
import socialStyles from '../styles/social.module.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/all"
import { graphql, useStaticQuery } from "gatsby"

const Social = () => {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    socialMediaLinks {
                        facebook
                        instagram
                        youtube
                        twitter
                    }
                }
            }
        }
    `
  )
  return (
    <span
      className={socialStyles.socialGroup}
    >
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={site.siteMetadata.socialMediaLinks.facebook}
          className={socialStyles.socialLink}
        >
        <FaFacebook
          className={socialStyles.socialItem}
        />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={site.siteMetadata.socialMediaLinks.instagram}
          className={socialStyles.socialLink}
        >
        <FaInstagram
          className={socialStyles.socialItem}
        />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={site.siteMetadata.socialMediaLinks.twitter}
          className={socialStyles.socialLink}
        >
        <FaTwitter
          className={socialStyles.socialItem}
        />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={site.siteMetadata.socialMediaLinks.youtube}
          className={socialStyles.socialLink}
        >
        <FaYoutube
          className={socialStyles.socialItem}
        />
        </a>
      </span>
  )
}

export default Social
