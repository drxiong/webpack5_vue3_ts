module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 设置typescript-eslint规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    // '@typescript-eslint/member-delimiter-style': [
    //   2,
    //   {
    //     multiline: {
    //       delimiter: 'none', // 'none' or 'semi' or 'comma'
    //       requireLast: true,
    //     },
    //     singleline: {
    //       delimiter: 'semi', // 'semi' or 'comma'
    //       requireLast: false,
    //     }
    //   }
    // ],
    // '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
    // '@typescript-eslint/explicit-function-return-type': ['off'],
    // '@typescript-eslint/no-explicit-any': ['off'], // 先忽略，但是尽量少用 any
  }
}

