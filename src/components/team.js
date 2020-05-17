import React from "react"
import { Card, CardDeck } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import teamStyles from "../styles/team.module.scss"

const Team = () => {
  const data = useStaticQuery(graphql`
      query {
          image1: file(relativePath: { eq: "images/team-member-1.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          image2: file(relativePath: { eq: "images/team-member-2.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          image3: file(relativePath: { eq: "images/team-member-3.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <div>
      <h3>MEET THE TEAM</h3>
      <br/>
      <CardDeck>

        <Card
          className={teamStyles.card}
        >
          <Card.Header
            className={teamStyles.header}
          >
            Director
          </Card.Header>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="Team Member 1"
            className={teamStyles.photo}
          />
          <Card.Body>
            <Card.Title>Jane Doe</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className={teamStyles.card}
        >
          <Card.Header
            className={teamStyles.header}
          >
            Director
          </Card.Header>
          <Img
            fluid={data.image2.childImageSharp.fluid}
            alt="Team Member 2"
            className={teamStyles.photo}
          />
          <Card.Body>
            <Card.Title>John Doe</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className={teamStyles.card}
        >
          <Card.Header
            className={teamStyles.header}
          >
            Ambassador
          </Card.Header>
          <Img
            fluid={data.image3.childImageSharp.fluid}
            alt="Team Member 3"
            className={teamStyles.photo}
          />
          <Card.Body>
            <Card.Title>Carin Doe</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

      </CardDeck>
    </div>
  )
}
export default Team
