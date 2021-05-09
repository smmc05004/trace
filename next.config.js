const Dotenv = require("dotenv-webpack");
const path = require("path");
console.log('env: ', process.env.NODE_ENV);

module.exports = {
  webpack: (config) => {
    const env = new Dotenv({
      silent: true,
      path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
    });
    config.plugins.push(env);
    return config;
  },

  devIndicators: {
    autoPrerender: false,
  },
};
