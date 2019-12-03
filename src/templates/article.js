/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import ArticleHeader from '../components/article/header'
import ArticleContent from '../components/article/content'
import ArticleRelated from '../components/article/related'
import Button from '../components/button'
import Card from '../components/card'
import Grid from '../components/grid'
import SEO from '../components/seo'

const _ = require('lodash')

const ArticleTemplate = ({ data: { mdx: article, relatedPosts } }) => (
  <Layout>
    <SEO
      title={article.frontmatter.title}
      description={article.excerpt}
      image={article.frontmatter.image.sharp.fluid}
    />
    <ArticleHeader
      title={article.frontmatter.title}
      icon={article.frontmatter.icon.sharp.fluid}
      time={article.frontmatter.articleDate}
      tag={article.frontmatter.tags.map((tag, i) => (
        <Link to={`/tags/${_.kebabCase(tag)}`} key={i}>
          {tag}
        </Link>
      ))}
    />
    <MainWrapper>
      <ContentWrapper>
        <Button
          buttonLink={article.frontmatter.downloadLink}
          buttonText="Download Assets + Code"
        />
        <ArticleContent article={article.body} />
      </ContentWrapper>
    </MainWrapper>

    <ArticleRelated
      tag={article.frontmatter.tags.map((tag, i) => (
        <Link to={`/tags/${_.kebabCase(tag)}`} key={i}>
          <ArticleRelatedText>{tag}</ArticleRelatedText>
        </Link>
      ))}
    />
    <Grid>
      {relatedPosts.edges.map(node => (
        <Link key={node.node.id} to={`/articles/${node.node.frontmatter.slug}`}>
          <Card
            articleNumber={node.node.frontmatter.articleID}
            articleDate={node.node.frontmatter.articleDate}
            articleIcon={node.node.frontmatter.icon.sharp.fluid}
            articleTags={node.node.frontmatter.tags}
            articleTitle={node.node.frontmatter.title}
            articleImage={node.node.frontmatter.image.sharp.fluid.src}
          />
        </Link>
      ))}
    </Grid>
  </Layout>
)

export default ArticleTemplate

const MainWrapper = styled.div`
  margin: auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  max-width: 680px;
  margin-top: 40px;
  margin: 0 auto;
`

const ArticleRelatedText = styled.div`
  font-size: 35px;
  margin-bottom: 35px;
`

export const query = graphql`
  query data($slug: String!, $tags: [String]) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        tags
        articleID
        articleDate(formatString: "MMMM DD, YYYY")
        downloadLink
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
      body
    }

    relatedPosts: allMdx(
      filter: { frontmatter: { tags: { in: $tags }, slug: { ne: $slug } } }
      sort: { fields: frontmatter___articleID, order: ASC }
    ) {
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
