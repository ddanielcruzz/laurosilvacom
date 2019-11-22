import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroContent from '../components/herocontent'
import SEO from '../components/seo'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges: articles } = data.allMdx

  return (
    <Layout>
      <SEO title={`Articles tagged as ${tag}`} />

      <MainWrapper>
        <HeroContent>
          <Title>
            Articles tagged as <span>{`${tag}`}</span>
          </Title>
        </HeroContent>
        <hr></hr>

        <Grid>
          {articles.map(({ node: article }) => (
            <Link key={article.id} to={`/articles/${article.frontmatter.slug}`}>
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
  )
}

export default Tags

const MainWrapper = styled.div``

const Title = styled.h1`
  margin-bottom: 5px;
  font-size: 24px;
  span {
    text-decoration: underline;
    color: #0d7bc9;
  }
`

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
