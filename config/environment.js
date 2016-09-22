/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'emberfire-demo',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyBNax6zOx12VGvCz2ZkKGFBRXLeMiPTR9M",
      authDomain: "tbtasks-7bda1.firebaseapp.com",
      databaseURL: "https://tbtasks-7bda1.firebaseio.com",
      storageBucket: "tbtasks-7bda1.appspot.com",
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV['ember-cli-mirage'] = {
      enabled: false
    },

    ENV['ember-moment'] = {
      allowEmpty: true
    }
  }

  if (environment === 'production') {

  }

  return ENV;
};
