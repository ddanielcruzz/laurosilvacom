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
          <h2>Latest Tutorials</h2>
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
`
export const pageQuery = graphql`
  query IndexPage {
    allMdx(sort: { fields: frontmatter___tutorialID, order: DESC }) {
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
