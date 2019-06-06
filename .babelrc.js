module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 2
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'component', {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
