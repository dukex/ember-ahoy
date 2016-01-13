export default {
  debug: false,
  visitsUrl: null,
  eventsUrl: null,

  load(config) {
    for(let property in this) {
      if(config[property]) {
        this[property] = config[property];
      }
    }

    window.ahoy.debug(this.debug);
  }
};
