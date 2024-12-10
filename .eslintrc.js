module.exports = {
  root: true,
  extends: [
    '@react-native', // Base React Native ESLint rules
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf', // Match Prettier's endOfLine rule
      },
    ],
  },
};
