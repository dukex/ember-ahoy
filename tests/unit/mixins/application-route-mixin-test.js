import Ember from 'ember';
import ApplicationRouteMixinMixin from 'ember-ahoy/mixins/application-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | application route mixin');

test('it works', function(assert) {
  assert.expect(3);

  const theAhoy = window.ahoy;

  window.ahoy = {
    track: (name, properties) => {
      assert.equal(name, '$view');
      assert.deepEqual(properties, {page: 'nameView', url: '/test'});
    }
  };

  let ApplicationRouteMixinObject = Ember.Route.extend(ApplicationRouteMixinMixin);
  let subject = ApplicationRouteMixinObject.create({
    router: Ember.Object.create({currentPath: 'nameView', url: '/test'})
  });
  
  assert.ok(subject);

  Ember.run(() => {
    subject.send('didTransition');
  });

  window.ahoy = theAhoy;
});
