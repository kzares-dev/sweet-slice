/** @type {import('expo/metro-config').MetroConfig} */
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  };

  config.resolver = {
    ...resolver,
    assetExts: [...resolver.assetExts, 'wasm'],
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'], 
  };

  config.server.enhanceMiddleware = (middleware) => {
    return (req, res, next) => {
      res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      middleware(req, res, next);
    };
  };

  return config;
})();