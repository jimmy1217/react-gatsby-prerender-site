const CompressionPlugin = require('compression-webpack-plugin');
exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "develop":
      break;

    case "build-css":
      break;

    case "build-html":
      break;

    case "build-javascript":
      // config.loader('js', (current) => {
      //   console.log(JSON.stringify(current, null, 2));
      //   return current;
      // });
      config.plugin("CompressionPlugin", CompressionPlugin, [{
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.7
      }]);
      break;
  }

  return config;
};