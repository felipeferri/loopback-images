'use strict';

module.exports = function(Image) {
  Image.observe('loaded', function(ctx, next) {
    const app = require('../../server/server.js');
    const { filename, container } = ctx.data;

    // Get the server url and remove a trailing slash, if present.
    const serverUrl = app.locals.settings.url.replace(/\/$/, "");
    const restApiRoot = app.locals.settings.restApiRoot;
    ctx.data.url =
      `${serverUrl}${restApiRoot}/containers/${container}/download/${filename}`;
    next();
  });
};
