// next.config.js
const withTM = require('next-transpile-modules')(['mongodb']); // Exclude problematic modules here

module.exports = withTM({
  webpack(config) {
    return config;
  },
});
