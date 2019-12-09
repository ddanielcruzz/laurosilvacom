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
  const { edges: articles } = data.allMdx

  return (
    <ThemeContext.Consumer>
      {theme => (
        <Layout>
          <SEO title={`Articles tagged as ${tag}`} />

          <MainWrapper>
            <HeroContent className={`${theme.dark ? 'dark' : 'light'}`}>
              <h2>{`${tag}`}</h2>
            </HeroContent>

            <Grid>
              {articles.map(({ node: article }) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.frontmatter.slug}`}
                >
                  <Card
                    articleNumber={article.frontmatter.articleID}
                    articleDate={article.frontmatter.articleDate}
                    articleIcon={article.frontmatter.icon.sharp.fluid}
                    articleTags={article.frontmatter.tags}
                    articleTitle={article.frontmatter.title}
                    articleImage={article.frontmatter.image.sharp.fluid.src}
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
