module.exports = () => {
  // Default to dev presets
  const dbConfig = {
    url: process.env.MONGODB_URI || 'mongodb://Gryv:lorrcenesrch1@ds163694.mlab.com:63694/alleccocms',
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
      Object.assign(dbConfig, { url: process.env.MONGODB_URI || 'mongodb://Gryv:lorrcenesrch1@ds163694.mlab.com:63694/alleccocms' });
      break;
    case 'dev':
    default:
      break;
  }

  return dbConfig;
};
