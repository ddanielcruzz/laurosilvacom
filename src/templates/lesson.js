/* eslint-disable react/display-name */
import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import TutorialHeader from '../components/tutorial/header'
import TutorialContent from '../components/tutorial/content'

const _ = require('lodash')

const LessonsTemplate = ({ data }) => {
  const { mdx } = data
  const { title } = mdx.frontmatter
  const { course } = mdx.frontmatter
  const { icon } = mdx.frontmatter

  return (
    <Layout>
      <TutorialHeader
        title={title}
        icon={icon.sharp.fluid}
        tag={course.map((course, i) => (
          <Link to={`/courses/${_.kebabCase(course)}`} key={i}>
            {course}
          </Link>
        ))}
      />

      <MainWrapper>
        <ContentWrapper>
          <TutorialContent tutorial={mdx.body} />
        </ContentWrapper>
      </MainWrapper>
    </Layout>
  )
}

export default LessonsTemplate

const MainWrapper = styled.div`
  margin: auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  max-width: 720px;
  margin-top: 40px;
  margin: 0 auto;
  h3 {
    color: var(--black);
  }
  p {
    color: var(--accent-200);
  }
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        course
        icon {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`
