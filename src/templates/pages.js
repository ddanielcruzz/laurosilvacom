/* eslint-disable react/display-name */
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import TutorialContent from '../components/tutorial/content'
import HeroContent from '../components/herocontent'

const PagesTemplate = ({ data }) => {
  const { mdx } = data
  const { title } = mdx.frontmatter
  const { icon } = mdx.frontmatter

  return (
    <Layout>
      <HeroContent>
        <h2>{title}</h2>
      </HeroContent>
      <MainWrapper>
        <ContentWrapper>
          <TutorialContent tutorial={mdx.body} />
        </ContentWrapper>
      </MainWrapper>
    </Layout>
  )
}

export default PagesTemplate

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
        image {
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
