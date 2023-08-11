const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  extends: ['react-app', 'plugin:security/recommended', 'plugin:storybook/recommended'],
  plugins: ['security', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-anonymous-default-export': 'off',
    'max-params': 'error',
    'security/detect-object-injection': 'off',
    'array-callback-return': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-console': isDev ? 'off' : 'error',
    'no-debugger': isDev ? 'off' : 'error',
    'arrow-body-style': ['error', 'as-needed'],
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/story-exports': 'off',
      },
    },
  ],
}
