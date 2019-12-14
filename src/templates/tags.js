import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext'

import Layout from '../components/layout'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroContent from '../components/herocontent'
import SEO from '../components/seo'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges: tutorials } = data.allMdx

  return (
    <ThemeContext.Consumer>
      {theme => (
        <Layout>
          <SEO title={`Tutorials tagged as ${tag}`} />

          <MainWrapper>
            <HeroContent className={`${theme.dark ? 'dark' : 'light'}`}>
              <h2>{`${tag}`}</h2>
            </HeroContent>

            <Grid>
              {tutorials.map(({ node: tutorial }) => (
                <Link
                  key={tutorial.id}
                  to={`/tutorials/${tutorial.frontmatter.slug}`}
                >
                  <Card
                    tutorialNumber={tutorial.frontmatter.tutorialID}
                    tutorialDate={tutorial.frontmatter.tutorialDate}
                    tutorialIcon={tutorial.frontmatter.icon.sharp.fluid}
                    tutorialTags={tutorial.frontmatter.tags}
                    tutorialTitle={tutorial.frontmatter.title}
                    tutorialImage={tutorial.frontmatter.image.sharp.fluid.src}
                  />
                </Link>
              ))}
            </Grid>
          </MainWrapper>
        </Layout>
      )}
    </ThemeContext.Consumer>
  )
}

export default Tags

const MainWrapper = styled.div``

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(limit: 2000, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          id
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
                fluid(maxWidth: 100) {
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
