const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/:year/:month/:day/:slug',
        destination: '/blog/:year/:year-:month-:day-:slug',
        permanent: true,
      },
    ]
  },
});
