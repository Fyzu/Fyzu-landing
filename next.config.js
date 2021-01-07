const path = require('path')
const withLinaria = require('next-linaria');

module.exports = withLinaria({
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, './src') // idk why, but aliases from tsconfig doesn't work

    return config
  },
  linaria: {
    cacheDirectory: path.resolve(__dirname, '.next/cache/next-linaria'),
  },
});
