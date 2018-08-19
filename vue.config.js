const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const path = require("path");

const includePaths = [
  path.resolve(__dirname, "./src/assets/scss"),
  path.resolve(__dirname, "./node_modules/foundation-sites/scss")
];

module.exports = {
  baseUrl: "",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        includePaths,
        data: `
          @import "settings";
          @import "foundation";
        `
      }
    }
  },
  chainWebpack(config) {
    config.plugin("lodash").use(LodashModuleReplacementPlugin, [
      {
        paths: true
      }
    ]);
  }
};
