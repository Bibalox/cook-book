/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'no-console': 'off',
    'no-extend-native': ['error', { 'exceptions': ['Array', 'Object'] }],
    'no-new': 0,
    'quotes': ['error', 'single'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': { 'max': 2 },
      'multiline': { 'max': 1 }
    }],
    'vue/no-reserved-keys': ['error', {
      'reserved': ['_path'],
      'groups': ['data']
    }]
  }
}
