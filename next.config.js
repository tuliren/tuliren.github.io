const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*',
        destination: '/blog/:year/:year-:month-:day-:slug',
        permanent: true,
      },
      {
        source: '/javascript-notes',
        destination: '/javascript',
        permanent: true,
      },
      {
        source: '/effective-java-notes',
        destination: '/effective-java',
        permanent: true,
      },
      {
        source: '/dinner',
        destination: 'https://tuliren.github.io/dinner',
        permanent: true,
      }
    ]
  },
});
