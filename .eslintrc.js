module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'react', 'react-hooks', '@typescript-eslint', 'prettier', 'simple-import-sort', 'import'
  ],
  rules: {
    'no-unused-vars': 'warn',
    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',
    // 'space-in-brackets':  'always',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'import/first': 'error',
    'import/newline-after-import': ['error', { "count": 1 }],
    'import/no-duplicates': 'error',
    // 'import/no-unresolved': ['error', { ignore: ['\\.img$', '\\.tsx$', '\\.ts$'] }]
    // 'import/no-unresolved': 'off',
    'import/namespace': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
}
