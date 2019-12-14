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
    reporter.panic('failed to create tutorials', result.errors)
  }

  const tutorials = result.data.allMdx.nodes

  tutorials.forEach(tutorial => {
    actions.createPage({
      path: `/tutorials/${tutorial.frontmatter.slug}/`,
      component: require.resolve('./src/templates/tutorial.js'),
      context: {
        slug: tutorial.frontmatter.slug,
        tags: tutorial.frontmatter.tags,
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
