import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Navbar, Nav } from "react-bootstrap"
import navbarStyles from '../styles/navbar.module.scss'


const CustomNavbar = ({ pageInfo }) => {
  const data = useStaticQuery(graphql`
      query {
          file(relativePath: { eq: "images/logo.png" }) {
              childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  return (
    <>
      <Navbar variant="light" expand="lg" id="site-navbar">
        <span className={navbarStyles.navItems}>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="NPO Logo"
                className={navbarStyles.logo}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/" className="link-no-style">
                <Nav.Link as="span" eventKey="home">
                  HOME
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/services" className="link-no-style">
                <Nav.Link as="span" eventKey="services">
                  SERVICES
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/products" className="link-no-style">
                <Nav.Link as="span" eventKey="products">
                  PRODUCTS
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/blog" className="link-no-style">
                <Nav.Link as="span" eventKey="blog">
                  BLOG
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/articles" className="link-no-style">
                <Nav.Link as="span" eventKey="articles">
                  ARTICLES
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/about" className="link-no-style">
                <Nav.Link as="span" eventKey="about">
                  ABOUT
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/contact" className="link-no-style">
                <Nav.Link as="span" eventKey="contact">
                  CONTACT
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className={navbarStyles.navItem} activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/support" className="link-no-style">
                <Nav.Link as="span" eventKey="support">
                  SUPPORT
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </span>
      </Navbar>
    </>
  )
}

export default CustomNavbar
