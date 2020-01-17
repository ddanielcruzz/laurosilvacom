const _ = require('lodash')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      lessons: allMdx(filter: { fileAbsolutePath: { regex: "//lessons//" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      coursesGroup: allMdx(
        limit: 2000
        filter: { fileAbsolutePath: { regex: "//lessons//" } }
      ) {
        group(field: frontmatter___course) {
          fieldValue
        }
      }

      tutorials: allMdx(
        filter: { fileAbsolutePath: { regex: "/tutorials//" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      tagsGroup: allMdx(
        filter: { fileAbsolutePath: { regex: "//tutorials//" } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create pages', result.errors)
  }
  // renders pages for lessons
  const lessons = result.data.lessons.nodes
  lessons.forEach(lesson => {
    actions.createPage({
      path: `/lessons/${lesson.frontmatter.slug}/`,
      component: require.resolve('./src/templates/lesson.js'),
      context: {
        slug: lesson.frontmatter.slug,
      },
    })
  })

  // renders pages for courses, based from course tags
  const courses = result.data.coursesGroup.group
  courses.forEach(course => {
    createPage({
      path: `/courses/${_.kebabCase(course.fieldValue)}/`,
      component: require.resolve('./src/templates/courses.js'),
      context: {
        course: course.fieldValue,
      },
    })
  })

  // renders pages for tutorials
  const tutorials = result.data.tutorials.nodes
  tutorials.forEach(tutorial => {
    actions.createPage({
      path: `/tutorials/${tutorial.frontmatter.slug}/`,
      component: require.resolve('./src/templates/tutorial.js'),
      context: {
        slug: tutorial.frontmatter.slug,
      },
    })
  })

  // renders pages for courses, based from tutorials tags
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
