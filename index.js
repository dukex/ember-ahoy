/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ahoy',
  isDevelopingAddon: function() {
    return true;
  },
  included: function(app){
    this._super.included(app);

    app.import(app.bowerDirectory + '/ahoy/ahoy.js');
  },
  contentFor: function(target, config){
    if(target === 'head') {
      return `<script>window.ahoy = {};\nwindow.ahoy.visitsUrl = '${config.ahoy.visitsUrl}';\nwindow.ahoy.eventsUrl = '${config.ahoy.eventsUrl}';</script>`
    }
  }
};
