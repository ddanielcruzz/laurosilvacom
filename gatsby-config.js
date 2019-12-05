const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://laurosilva.com`

module.exports = {
  siteMetadata: {
    title: `Lauro Silva`,
    description: `Software Engineer and Technical Writer`,
    author: `@laurosilvacom`,
    siteUrl,
    social: {
      twitter: `laurosilvacom`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        // Links are relative to this directory
        // excludeRegex: /excluded-link/,
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.articleDate,
                  url: `${site.siteMetadata.siteUrl}/articles/${edge.node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/articles/${edge.node.frontmatter.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___articleID] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        slug
                        title
                        articleDate
                        articleID
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Lauro Silva's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-153984172-1',
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `articles`,
        path: `${__dirname}/articles/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          'gatsby-remark-prismjs',
          { resolve: 'gatsby-remark-smartypants' },
        ],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
            variants: [`400`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
