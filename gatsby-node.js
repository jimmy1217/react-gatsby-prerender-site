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
      config._config.resolve.alias = {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      };
      config.plugin("CompressionPlugin", CompressionPlugin, [{
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }]);
      break;
  }

  return config;
};