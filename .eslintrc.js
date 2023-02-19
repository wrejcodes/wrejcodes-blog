module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './src'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  },
};
