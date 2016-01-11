export default {
  debug: false,

  load(envConfig) {
    const config = Object.assign({}, envConfig);
    for(let property in this) {
      if(config[property]) {
        this[property] = config[property];
      }
    }
  }
};
