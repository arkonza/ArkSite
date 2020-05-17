import React from "react"
import { graphql} from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
    query (
        $slug: String!
    ) {
        contentfulArticlePost (
            slug: {
                eq: $slug
            }
        ) {
            title
            publishedDate
            body {
                json
            }
        }
    }
`

const Article = (props) => {
  const options = {
  renderNode: {
    "embedded-asset-block": (node) => {
      const alt = node.data.target.fields.title['en-US']
      const url = node.data.target.fields.file['en-US'].url

      return <img alt={alt} src={url} />
    }
  }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulArticlePost.title}/>
      <h1>{props.data.contentfulArticlePost.title}</h1>
      <p>{props.data.contentfulArticlePost.date}</p>
      {documentToReactComponents(props.data.contentfulArticlePost.body.json, options)}
    </Layout>
  )
}

export default Article
