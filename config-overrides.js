const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),


);