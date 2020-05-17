import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import Masthead from "./masthead"
import Footer from "./footer"

function withMasthead({children, pageInfo }) {
  return (
    <>
      <Container fluid className="px-0 main">
        <Row noGutters className="justify-content-center">
          <Col>
            <Header/>
          </Col>
        </Row>
        <Navbar pageInfo={pageInfo}/>
        <Masthead/>
        <Row noGutters>
          <Col>
            <Container className="mt-5">
              <main>{children}</main>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row noGutters>
          <Col className="footer-col">
            <Footer/>
          </Col>
        </Row>
      </Container>
    </>
  )}

function withoutMasthead({children, pageInfo }) {
  return (
    <>
      <Container fluid className="px-0 main">
        <Row noGutters className="justify-content-center">
          <Col>
            <Header/>
          </Col>
        </Row>
        <Navbar pageInfo={pageInfo}/>
        <Row noGutters>
          <Col>
            <Container className="mt-5">
              <main>{children}</main>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row noGutters>
          <Col className="footer-col">
            <Footer/>
          </Col>
        </Row>
      </Container>
    </>
  )}

const Layout = ({ children, pageInfo, masthead }) => (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (masthead ? withMasthead({children, pageInfo, data}) : withoutMasthead({children, pageInfo, data}))}
    />)
export default Layout
