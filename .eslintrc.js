module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      'babel-module': { allowExistingDirectories: true },
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  rules: {
    'import/extensions': ['error', 'never'],
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'global-require': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': 0,
    'react-native/no-inline-styles': 0,
  },
};
