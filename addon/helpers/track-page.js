import Ember from 'ember';

const { run } = Ember;

export function trackPage(params) {
  run(() => {
    run.scheduleOnce('afterRender', () => {
      const [ page, title=document.title, url=window.location.href ] = params;
      const properties = { url, title, page };
      window.ahoy.track("$view", properties);
    });
  });

  return;
}

export default Ember.Helper.helper(trackPage);
