module.exports = {
  extends: [
    "airbnb-typescript/base",
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "linebreak-style": 0
  }
}