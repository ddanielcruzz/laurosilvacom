const _ = require('lodash')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create articles', result.errors)
  }

  const articles = result.data.allMdx.nodes

  articles.forEach(article => {
    actions.createPage({
      path: `/articles/${article.frontmatter.slug}/`,
      component: require.resolve('./src/templates/article.js'),
      context: {
        slug: article.frontmatter.slug,
        tags: article.frontmatter.tags,
      },
    })
  })

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: require.resolve('./src/templates/tags.js'),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
