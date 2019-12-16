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
        title="Lauro Silva"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        image={data.placeholderImage2.childImageSharp.fluid}
      />

      <HeroLanding>
        <h2>Independent Software Engineer</h2>
        <br />
        <p>
          I do all my learning in public. Then I write in-depth technical
          tutorials, and create concise screencasts about it.
        </p>
        <Image fadeIn="false" loading="eager" critical="true" />
        <br />
        <Button
          buttonLink="https://laurosilvacom.substack.com/subscribe"
          buttonText="Newsletter"
          buttonIcon={<FiMail />}
        />
      </HeroLanding>

      <TitleWrapper>
        <h2>Latest Tutorials</h2>
      </TitleWrapper>

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

const TitleWrapper = styled.div`
  max-width: 680px;
  margin: auto;
  padding: 20px;
  color: var(--background);
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
