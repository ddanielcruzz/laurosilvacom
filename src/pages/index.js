import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { FiMail } from 'react-icons/fi'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroLanding from '../components/herolanding'
import Button from '../components/button'
import Image from '../components/image'

const Index = ({ data }) => {
  const { edges: tutorials } = data.allMdx
  const { edges: lessons } = data.lessons

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        image={data.placeholderImage2.childImageSharp.fluid}
      />

      <HeroLanding>
        <h1>Software Engineer & Technical Writer</h1>
        <p>
          I enjoy building thoughtful software and helping individuals become
          better programmers.
        </p>
        <Image fadeIn="false" loading="eager" critical="true" />
        <br />

        <Button
          buttonLink="https://laurosilvacom.substack.com/subscribe"
          buttonText="Subscribe to Newsletter"
          buttonIcon={<FiMail />}
        />
      </HeroLanding>

      <TitlePadding>
        <TitleWrapper>
          <h2>
            Latest Tutorials <Link to="/tutorials">View All</Link>
          </h2>
        </TitleWrapper>
      </TitlePadding>

      <Grid>
        {tutorials.map(({ node: tutorial }) => (
          <Link
            key={tutorial.id}
            to={`/tutorials/${tutorial.frontmatter.slug}`}
          >
            <Card
              tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
              tutorialTags={tutorial.frontmatter.tags}
              tutorialTitle={tutorial.frontmatter.title}
            />
          </Link>
        ))}
      </Grid>

      <TitlePadding>
        <TitleWrapper>
          <h2>
            Latest Screencasts <Link to="/lessons">View All</Link>
          </h2>
        </TitleWrapper>
      </TitlePadding>
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

const TitlePadding = styled.div`
  padding: 20px;
`
const TitleWrapper = styled.div`
  max-width: 720px;
  margin: auto;
  color: var(--black);
  h2 {
    display: flex;
    align-items: center;
    border-bottom: 0;
    padding-bottom: 0;
  }
  a {
    display: inline-block;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    border: 1px solid var(--accent-100);
    color: var(--accent-200);
    font-size: 1rem;
    font-weight: 500;
    margin: 0.25rem 1rem 0 2rem;
    font-weight: 400;
  }
  a:hover {
    border: 1px solid var(--success);
    color: var(--success);
  }
  @media (max-width: 680px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`
export const pageQuery = graphql`
  query IndexPage {
    allMdx(
      sort: { fields: frontmatter___tutorialDate, order: DESC }
      filter: { fileAbsolutePath: { regex: "//tutorials//" } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            tutorialID
            tutorialDate
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
    lessons: allMdx(
      sort: { fields: frontmatter___lessonDate, order: DESC }
      filter: { fileAbsolutePath: { regex: "//lessons//" } }
      limit: 3
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
    placeholderImage2: file(relativePath: { eq: "lauro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
