import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from "ember-data";

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.ApplicationAdapter= DS.RESTAdapter;
//App.ApplicationAdapter = DS.FirebaseAdapter.extend({
 // firebase: new Firebase('https://docs-examples.firebaseio.com/web/bindings/ember/blog')
//});


loadInitializers(App, config.modulePrefix);

export default App;
