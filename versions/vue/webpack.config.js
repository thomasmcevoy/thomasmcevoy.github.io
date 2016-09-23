module.exports = {
  context: './scripts/',
  entry: 'main.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
    ]
  }
}
