# Ember Ahoy

This Addon integrates your ember app with ahoy, a Visit and event tracking for JavaScript

## Installation

Installing the library is as easy as:

* ember install ember-ahoy

## Usage

To track a visit in a page you can use `track-page` helper:

``` handlebars
{{!-- app/templates/home.hbs --}}
{{track-page "home"}}

...
```

To track view each transition extends 'application-route-mixin' in application route:

``` javascript
// app/routes/application.js
import Ember from 'Ember';
import AhoyApplicationRouteMiin from 'ember-ahoy/mixins/application-route-mixin';

export default Ember.Route.extend(AhoyApplicationRouteMixin, {
// ...
});
```

## Configuration

Ember Ahoy is configured via the 'ember-ahoy' section in the application's config/environment.js file, e.g.:

```
ENV['ahoy'] = {
  debug: environment === 'development',
  visitsUrl: 'http://my.server.io/ahoy/visits',
  eventsUrl: 'http://my.server.io/ahoy/events'
};
```
