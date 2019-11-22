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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
        ],
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
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              colorTheme: 'Codesandbox',
              extensions: [
                {
                  identifier: 'ngryman.codesandbox-theme',
                  version: '1.1.3',
                },
              ],
            },
          },
          { resolve: 'gatsby-remark-smartypants' },
        ],
        plugins: [{ resolve: 'gatsby-remark-images' }],
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lauro.jpg`,
      },
    },
  ],
}
