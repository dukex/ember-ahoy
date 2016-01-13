export default {
  debug: false,
  visitsUrl: '/ahoy/visits',
  eventsUrl: '/ahoy/events',

  load(config) {
    for(let property in this) {
      if(config[property]) {
        this[property] = config[property];
      }
    }

    window.ahoy.debug(this.debug);
  }
};
