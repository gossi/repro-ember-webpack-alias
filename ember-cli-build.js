'use strict';

const path = require('node:path');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    // Add options here
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,
    // splitAtRoutes: ['route.name'], // can also be a RegExp
    packagerOptions: {
      webpackConfig: {
        // devtool: process.env.CI ? 'source-map' : 'eval',
        devtool: 'source-map',
        resolve: {
          alias: {
            '@foo/home': path.resolve(__dirname, 'app/domain/home'),
          },
        },
      },
    },
  });
};
