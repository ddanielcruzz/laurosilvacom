import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroLanding from '../components/herolanding'
import Button from '../components/button'

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allMdx
  return (
    <Layout>
      <SEO
        title="Software Engineer & Technical Writer."
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <HeroLanding>
        <h1>I'm Lauro. Software engineer and technical writer.</h1>
        <p>
          I make things from scratch and break down complex concepts into
          simple, digestible tutorials.
        </p>

        <Button buttonLink="/" buttonText="Join the Newsletter" />
      </HeroLanding>

      <TitleWrapper>
        <h1>Latest Articles</h1>
      </TitleWrapper>

      <Grid>
        {articles.map(({ node: article }) => (
          <Link key={article.id} to={`/articles/${article.frontmatter.slug}`}>
            <Card
              articleIcon={article.frontmatter.icon.sharp.fluid}
              articleTags={article.frontmatter.tags}
              articleTitle={article.frontmatter.title}
            />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

const TitleWrapper = styled.div`
  max-width: 820px;
  margin: auto;
  padding: 20px;
  h1 {
    font-size: 40px;
    margin: 0;
    line-height: 1.01em;
    font-weight: 800;
  }
  @media (max-width: 780px) {
    h1 {
      font-size: 30px;
    }
  }
`
export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: frontmatter___articleID, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            tags
            articleID
            articleDate
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

export default IndexPage
