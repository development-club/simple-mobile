module.exports = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.md'],
      options: {
        // parser: 'json',
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
}
