module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'fi9bnqb2cd7z',
        accessToken: 'sgj_DG1ptBP3JvsXqL05trnASsc3Hk6vDDrkKcrQQpc'
      }
    },
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp'
  ]
}