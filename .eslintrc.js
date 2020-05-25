module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['standard'],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    // 禁止使用 alert、confirm、prompt
    'no-alert': 'error',
    // 禁止使用 var 关键字声明变量
    'no-var': 'error',
    // switch 语句最后必须有 default
    'default-case': 'error',
    // 禁止行内注释
    'no-inline-comments': 'error',
    'line-comment-position': ['error', { position: 'above', }],
    // 注释后增加空格
    'spaced-comment': ['error', 'always'],
    // if while function 后面的 { 一定要和 if 在同一行
    'brace-style': ['error', '1tbs'],
    // 空白行最多不超过两行
    'no-multiple-empty-lines': ['error', { max: 2, }],
    semi: ['error', 'always'],
  },
};
