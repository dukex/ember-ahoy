import ENV from '../config/environment';
import Configuration from 'ember-ahoy/configuration';

export function initialize(/* application */) {
  const config   = ENV['ahoy'] || {};
  Configuration.load(config);
}

export default {
  name: 'ember-ahoy',
  initialize
};
