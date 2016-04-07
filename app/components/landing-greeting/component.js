import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  name: Ember.computed.alias('auth.credentials.name'),
});
