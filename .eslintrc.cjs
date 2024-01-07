/** @type {import("eslint").Linter.Config} */

const config = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'prettier', 'plugin:tailwindcss/recommended'],
  plugins: ['@typescript-eslint', 'tailwindcss'],
  ignorePatterns: ['out/*', 'node_modules/*', 'tailwind.config.ts'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        'react/no-unescaped-entities': 0,
        '@next/next/no-html-link-for-pages': ['off'],
        'tailwindcss/no-contradicting-classname': 0,
      },
      settings: {},
    },
  ],
};

module.exports = config;
