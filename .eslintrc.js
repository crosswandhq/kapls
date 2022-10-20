module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-native', 'import'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ignorePackages: true,
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-unresolved': [2, { caseSensitiveStrict: true }],
        'prettier/prettier': ['error'],
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'no-use-before-define': 0,
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
