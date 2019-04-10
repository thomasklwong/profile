module.exports = {
  siteMetadata: {
    author: {
      name: 'Thomas Wong',
      email: 'thomasklwong@gmail.com',
      linkedin: 'thomasklwong',
      github: 'thomasklwong'
    },
    siteUrl: 'https://confident-nightingale-cbc8f5.netlify.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    }
  ]
};
