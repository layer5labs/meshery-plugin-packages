/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Layer5 Recognition Program`,
    siteUrl: `https://badges.layer5.io`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  "gatsby-plugin-image",
  {
    resolve: "gatsby-plugin-sharp",
    options: {
      defaults: {
        placeholder: "blurred",
      }
    }
  },
  {
    resolve: "gatsby-transformer-sharp",
    options: {
      checkSupportedExtensions: false, // suppress warning about childImageSharp being null
    },
  },
]
}; 