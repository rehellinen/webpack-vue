module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-return-await': 0,
    'no-multiple-empty-lines': [2, {
      max: 2
    }]
  },
  globals: {
    PRODUCTION: false
  }
}
