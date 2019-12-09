import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroContent from '../components/herocontent'

const Writing = ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <ThemeContext.Consumer>
      {theme => (
        <Layout>
          <SEO
            title="Technical Writing"
            keywords={[`blog`, `writing`, `lauro`, `javascript`, `react`]}
          />

          <HeroContent className={`${theme.dark ? 'dark' : 'light'}`}>
            <h2>All Articles</h2>
          </HeroContent>

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
  query WritingPage {
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

export default Writing
