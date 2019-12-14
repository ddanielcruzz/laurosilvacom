import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { FiMail } from 'react-icons/fi'
import ThemeContext from '../context/ThemeContext'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import Grid from '../components/grid'
import HeroLanding from '../components/herolanding'
import Button from '../components/button'
import Image from '../components/image'

const Index = ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <ThemeContext.Consumer>
      {theme => (
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
              I do all my{' '}
              <a href="/articles/learning-in-public">learning in public</a>.
              Then I write <a href="/writing">tutorials</a> and create{' '}
              <a href="https://setih.com">screencasts</a> about it.
            </p>
            <Image fadeIn="false" loading="eager" critical="true" />
            <br />
            <Button
              buttonLink="https://laurosilvacom.substack.com/subscribe"
              buttonText="Newsletter"
              buttonIcon={<FiMail />}
            />
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
  query IndexPage {
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
