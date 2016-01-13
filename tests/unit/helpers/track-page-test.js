import { trackPage } from '../../../helpers/track-page';
import { module, test } from 'qunit';

module('Unit | Helper | track page');

test('it works', function(assert) {
  assert.expect(6);

  const theAhoy = window.ahoy;

  window.ahoy = {
    track: (name, properties) => {
      assert.equal(name, '$view');
      assert.deepEqual(properties, {page: 'nameView', url: window.location.href, title: document.title});
    }
  };

  trackPage(['nameView']);

  window.ahoy = {
    track: (name, properties) => {
      assert.equal(name, '$view');
      assert.deepEqual(properties, {page: 'nameView', url: window.location.href, title: 'page'});
    }
  };
  trackPage(['nameView', 'page']);

  window.ahoy = {
    track: (name, properties) => {
      assert.equal(name, '$view');
      assert.deepEqual(properties, {page: 'nameView', url: 'google.com', title: 'page'});
    }
  };
  trackPage(['nameView', 'page', 'google.com']);

  window.ahoy = theAhoy;
});
