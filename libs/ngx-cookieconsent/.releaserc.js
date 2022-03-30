const { createReleaseConfig } = require('../../tools/release');

module.exports = createReleaseConfig({
  projectName: '@jcb-entrnce/ngx-cookieconsent',
  projectRoot: 'libs/ngx-cookieconsent',
  buildOutput: 'dist/libs/ngx-cookieconsent',
});
