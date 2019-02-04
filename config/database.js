module.exports = () => {
  // Default to dev presets
  const dbConfig = {
    url: 'mongodb://alleccocms:alleccocms1@ds251284.mlab.com:51284/alleccocms',
    opts: {
      autoReconnect: true
    }
  };

  switch (process.env.NODE_ENV) {
    case 'production':
      break;
    case 'stage':
      break;
    case 'test':
      break;
    case 'dev':
    default:
      break;
  }

  return dbConfig;
};
