module.exports = {
    siteMetadata: {
        title: `Minimal Blog`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
          },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`
    ]
}