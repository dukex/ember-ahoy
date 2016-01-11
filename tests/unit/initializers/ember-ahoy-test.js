import Ember from 'ember';
import EmberAhoyInitializer from '../../../initializers/ember-ahoy';
import { module, test } from 'qunit';
import Configuration from 'ember-ahoy/configuration';

let application;

module('Unit | Initializer | ember ahoy', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

test('it works', function(assert) {
  EmberAhoyInitializer.initialize(application);
  assert.ok(Configuration.debug);
});
