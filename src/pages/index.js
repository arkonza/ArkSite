import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutStyles from "../styles/about.module.scss"
import Team from "../components/team"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }} masthead={true}>
    <SEO title="Home" keywords={[`npo`, `npo template`, `nfp`]} />
    <Container className="text-center">
      <Row className={[aboutStyles.list, `justify-content-center`, `my-3`]}>
        <Col md="12">
          <h3>
           WELCOME TO THE NPO TEMPLATE
          </h3>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed velit eu orci sollicitudin dapibus. Aenean gravida iaculis dignissim. Nunc suscipit augue vel gravida accumsan. Vivamus laoreet suscipit sem, id ullamcorper augue ultrices in. Etiam sagittis ex lacus, a mollis justo aliquet non. Nam viverra lorem eu felis aliquam, nec posuere felis efficitur. Praesent aliquam vestibulum lectus ultricies consectetur. Aliquam interdum dapibus elit, a lacinia ligula facilisis a.
          </p>
          <p>
            Curabitur id sagittis urna, lobortis laoreet felis. Nulla ac posuere eros. Nulla finibus lacinia turpis. Vestibulum varius justo eget interdum auctor. Proin nec nisl imperdiet mi cursus mattis eu quis enim. Quisque consectetur tortor vitae lectus vehicula, vel aliquet ipsum viverra. Quisque porttitor pellentesque feugiat. Duis posuere mollis metus, imperdiet scelerisque tellus viverra ac. Cras libero lectus, tempor quis interdum eu, tempus at nisi. Phasellus volutpat lacinia aliquam. Nulla et consectetur nisi, sed porta risus. Nam at orci vitae est rhoncus vehicula. Nunc non lorem et orci ornare cursus at eget nunc. Nulla faucibus ex ipsum, at sodales sem ullamcorper non.
          </p>
        </Col>
      </Row>
      <Row className={[aboutStyles.list, `justify-content-center`, `my-3`]}>
        <Team/>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
