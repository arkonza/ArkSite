import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import aboutStyles from "../styles/about.module.scss"

const AboutPage = () => {
  return (
    <Layout pageInfo={{ pageName: "about" }}>
      <SEO title="About" keywords={[`npo`, `nfp`, `about`]} />
      <Container className="text-center">
        <Row className={[aboutStyles.list, `justify-content-center`, `my-3`]}>
          <Col md="12">
            <h3>
              A Free template to be used for NPO sites
            </h3>
            <ListGroup>
              <ListGroup.Item>
                Free to use
              </ListGroup.Item>
              <ListGroup.Item>
                Based on Gatsby
              </ListGroup.Item>
              <ListGroup.Item>
                Can be hosted for free on Gitlab
              </ListGroup.Item>
              <ListGroup.Item>
                Content managed by markdown files or through contentful.com
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
