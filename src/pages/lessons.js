import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroContent from '../components/herocontent'

const Lessons = ({ data }) => {
  const { edges: lessons } = data.allMdx

  return (
    <Layout>
      <SEO
        title="Lessons"
        keywords={[`blog`, `writing`, `tutorials`, `javascript`, `react`]}
      />

      <HeroContent>
        <h2>All Screencasts</h2>
      </HeroContent>

      <Grid>
        {lessons.map(({ node: lesson }) => (
          <Link key={lesson.id} to={`/lessons/${lesson.frontmatter.slug}`}>
            <Card
              tutorialIcon={lesson.frontmatter.icon.sharp.fluid}
              tutorialTags={lesson.frontmatter.tags}
              tutorialTitle={lesson.frontmatter.title}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AllLessonsPage {
    allMdx(
      sort: { fields: frontmatter___lessonDate, order: DESC }
      filter: { fileAbsolutePath: { regex: "//lessons//" } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            lessonID
            lessonDate
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            icon {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Lessons
