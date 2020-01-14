/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { FiMail } from 'react-icons/fi'
import Layout from '../components/layout'

import TutorialHeader from '../components/tutorial/header'
import TutorialContent from '../components/tutorial/content'
import TutorialRelated from '../components/tutorial/related'
import Card from '../components/card'
import Grid from '../components/grid'
import SEO from '../components/seo'
import Button from '../components/button'

const _ = require('lodash')

const TutorialTemplate = ({ data: { mdx: tutorial, relatedPosts } }) => (
  <Layout>
    <SEO
      title={tutorial.frontmatter.title}
      description={tutorial.excerpt}
      image={tutorial.frontmatter.image.sharp.fluid}
    />
    <TutorialHeader
      title={tutorial.frontmatter.title}
      icon={tutorial.frontmatter.icon.sharp.fluid}
      time={tutorial.frontmatter.tutorialDate}
      tag={tutorial.frontmatter.tags.map((tag, i) => (
        <Link to={`/tags/${_.kebabCase(tag)}`} key={i}>
          {tag}
        </Link>
      ))}
    />
    <MainWrapper>
      <ContentWrapper>
        <TutorialContent tutorial={tutorial.body} />
        <hr />
        <h3>Join the newsletter</h3>
        <p>
          I write about modern JavaScript and programming. Once a month, I’ll
          send you a tutorial that’s guaranteed to help you become a better
          developer. No unexplained jargons. Just plain good content.{' '}
          <u>One-click unsubscribe anytime.</u>
        </p>
        <Button
          buttonLink="https://laurosilvacom.substack.com/subscribe"
          buttonText="Subscribe to Newsletter"
          buttonIcon={<FiMail />}
        />
      </ContentWrapper>
    </MainWrapper>

    <TutorialRelated
      tag={tutorial.frontmatter.tags.map((tag, i) => (
        <TutorialRelatedText>
          <hr />
          <Link to={`/tags/${_.kebabCase(tag)}`} key={i}>
            {tag} Related Tutorials
          </Link>
        </TutorialRelatedText>
      ))}
    />
    <Grid>
      {relatedPosts.edges.map(node => (
        <Link
          key={node.node.id}
          to={`/tutorials/${node.node.frontmatter.slug}`}
        >
          <Card
            tutorialNumber={node.node.frontmatter.tutorialID}
            tutorialDate={node.node.frontmatter.tutorialDate}
            tutorialIcon={node.node.frontmatter.icon.sharp.fluid}
            tutorialTags={node.node.frontmatter.tags}
            tutorialTitle={node.node.frontmatter.title}
            tutorialImage={node.node.frontmatter.image.sharp.fluid.src}
          />
        </Link>
      ))}
    </Grid>
  </Layout>
)

export default TutorialTemplate

const MainWrapper = styled.div`
  margin: auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  max-width: 720px;
  margin-top: 40px;
  margin: 0 auto;
  h3 {
    color: var(--black);
  }
  p {
    color: var(--accent-200);
  }
`

const TutorialRelatedText = styled.div`
  color: var(--black);
  a {
    color: var(--black);
  }
`

export const query = graphql`
  query data($slug: String!, $tags: [String]) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        tags
        tutorialID
        tutorialDate(formatString: "MMMM DD, YYYY")
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
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
      sort: { fields: frontmatter___tutorialID, order: ASC }
      limit: 3
    ) {
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
