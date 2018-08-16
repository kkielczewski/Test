module.exports = (env) => {
  if (!env) {
    throw new Error('Pass an env flag.');
  }
  /* eslint-disable */
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  /* eslint-enable */

  return envConfig;
};
