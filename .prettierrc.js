module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 100,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  overrides: [
    {
      files: "*.{md,mdx}",
      options: {
        "proseWrap": "preserve"
      }
    }
  ],

  // import order
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
