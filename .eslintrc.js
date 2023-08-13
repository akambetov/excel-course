module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': ['warn'],
  },
  extends: ['eslint:recommended', 'google'],
};
