const crypto = require("crypto");

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
  },
  plugins: [
    // Opcional: Otros plugins de Webpack que puedas necesitar
  ],
};
