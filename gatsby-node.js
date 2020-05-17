const path = require('path')

module.exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions

  const blogTemplate = path.resolve('./src/templates/blog.js')
  const blogResponse = await graphql(`
 query {
  allContentfulBlogPost {
    edges {
      node {
        slug
      }
    }
  }
}
`)

  blogResponse.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  })

  const articleTemplate = path.resolve('./src/templates/article.js')
  const articleResponse = await graphql(`
 query {
  allContentfulArticlePost {
    edges {
      node {
        slug
      }
    }
  }
}
`)

  articleResponse.data.allContentfulArticlePost.edges.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/article/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  })
}
