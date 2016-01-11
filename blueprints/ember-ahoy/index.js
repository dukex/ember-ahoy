/*jshint node:true*/

module.exports = {
  description: 'ember-ahoy',

  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([{
      name: 'ahoy'
    }]);
  }
};
