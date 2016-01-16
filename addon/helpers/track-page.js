import Ember from 'ember';

const { run } = Ember;

export function trackPage(params) {
  run(() => {
    run.scheduleOnce('afterRender', () => {
      let [ page, title, url ] = params;
      url =  url || window.location.href;
      title = title || document.title;
      const properties = { url, title, page };
      window.ahoy.track('$view', properties);
    });
  });

  return;
}

export default Ember.Helper.helper(trackPage);
