import PropTypes from "prop-types"
import React from "react"
import headerStyles from '../styles/header.module.scss'
import Social from "./social"
import BroadcastBanner from "./broadcastBanner"

const Header = () => (
  <header
    className={headerStyles.header}
  >
    <BroadcastBanner/>
    <div
      className={headerStyles.innerDiv}
    >
      <Social/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
