import React from 'react'
import { Alert } from "react-bootstrap"
import broadcastBanner from '../styles/broadcastBanner.module.scss'
import { graphql, useStaticQuery } from "gatsby"

const BroadcastBanner = () => {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    broadcastBannerEnabled
                }
            }
        }
    `
  )

  if(!site.siteMetadata.broadcastBannerEnabled) return "";

  return (
    <Alert
      id={`broadcastBanner`}
      variant={`info`}
      dismissible={true}
      className={broadcastBanner.alert}
      onClose={() => {
        const alert = document.getElementById("broadcastBanner")

        if(!alert) return

        alert.remove()
      }}
    >
      <span>
        <img
          alt="covid-19 banner"
          src={`https://my.hostafrica.co.za//templates/hostafrica2020/img/covid-19.png`}
        />
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://sacoronavirus.co.za/`} className={broadcastBanner.link}
        >
          Keep updated on COVID-19
        </a>
      </span>
    </Alert>
  )
}

export default BroadcastBanner
