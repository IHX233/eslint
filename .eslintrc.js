module.exports = {
  env: { // 代码在什么环境运行，该环境下的全局变量可直接使用
    browser: true, // 是否浏览器环境
    commonjs: true,
    es2021: true,
  },
  globals: { // 全局变量
    $: true,
  },
  extends: 'airbnb-base', // eslint使用什么规范
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest', // eslint解析代码时解析哪个js版本
  },
  rules: { // 不使用extend中的规范时在rules中配置所有规范，或使用extend时在rules中修改部分配置
    semi: 1, // 0关闭，1警告，2报错
  },
};
