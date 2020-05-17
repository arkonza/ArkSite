import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

import articleStyles from '../styles/article.module.scss'
import Head from "../components/head"

const ArticlePage = () => {

  const data = useStaticQuery(graphql`
      query {
          allContentfulArticlePost (
              sort: {
                  fields: publishedDate,
                  order: DESC
              }
          ) {
              edges {
                  node {
                      title
                      slug
                      publishedDate(fromNow:true)
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <Head title={"Articles"}/>

      <h1>Articles</h1>
      <ol className={articleStyles.posts}>
        {
          data.allContentfulArticlePost.edges.map(
            edge =>
              <li className={articleStyles.post}>
                <h2><Link to={`/article/${edge.node.slug}`}>{edge.node.title}</Link></h2>
                <p>{edge.node.publishedDate}</p>
              </li>
          )
        }
      </ol>
    </Layout>
  )
}

export default ArticlePage
