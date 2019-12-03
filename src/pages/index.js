import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroLanding from '../components/herolanding'
import Button from '../components/button'
import Image from '../components/image'

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <ThemeContext.Consumer>
      {theme => (
        <Layout>
          <SEO
            title="Software Engineer & Technical Writer"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />

          <HeroLanding>
            <h2>Software Engineer & Technical Writer</h2>
            <p>
              I make things from scratch, contribute to open source, and write.
            </p>
            <Image />
            <Button buttonLink="/" buttonText="Join the Newsletter" />
          </HeroLanding>

          <TitleWrapper className={`${theme.dark ? 'dark' : 'light'}`}>
            <h2>Latest Articles</h2>
          </TitleWrapper>

          <Grid>
            {articles.map(({ node: article }) => (
              <Link
                key={article.id}
                to={`/articles/${article.frontmatter.slug}`}
              >
                <Card
                  articleIcon={article.frontmatter.icon.sharp.fluid}
                  articleTags={article.frontmatter.tags}
                  articleTitle={article.frontmatter.title}
                />
              </Link>
            ))}
          </Grid>
        </Layout>
      )}
    </ThemeContext.Consumer>
  )
}

const TitleWrapper = styled.div`
  max-width: 680px;
  margin: auto;
  padding: 20px;
  &.dark h2 {
    color: var(--background);
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
