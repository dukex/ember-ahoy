import Ember from 'ember';

/**
  The mixin for the application route;
  When extended this mixin uses the `didTransition` action to track $view

  @class ApplicationRouteMixin
  @module ember-ahoy/mixins/application-route-mixin
  @extends Ember.Mixin
  @public
*/
export default Ember.Mixin.create({
  actions: {
    didTransition: function() {
      Ember.run.once(this, function() {
        const router = this.router;
        const properties = { url: router.get('url'), page: router.get('currentPath') };
        window.ahoy.track("$view", properties);
      });
    }
  }
});
