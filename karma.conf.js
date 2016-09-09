var _ = require('lodash');
var webpackConfig = require('./webpack.config.js');

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    colors: true,
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine',
      'es6-shim'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      //'progress',
      'spec',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    specReporter: {
      maxLogLines: 10,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },

    files: [
      // Grab all files in the app folder that contain .spec.
      'src/test.ts'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/test.ts': ['webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    webpack: _.merge({}, webpackConfig, {
      module: {
        postLoaders: [
          {
            test: /^((?!\.spec\.ts).)*.ts$/,
            exclude: [
              /node_modules\//
            ],
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    }),

    // Hide webpack build information from output
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      },
      noInfo: 'errors-only'
    }
  });
};
