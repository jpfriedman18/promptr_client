import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isTeacher: Ember.computed.alias('auth.isTeacher'),
});
