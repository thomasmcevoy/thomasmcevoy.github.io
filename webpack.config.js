module.exports = {
  entry: "./scripts/entry.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000
  }
};
