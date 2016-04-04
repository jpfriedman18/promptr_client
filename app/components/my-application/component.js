import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  // isTeacher: Ember.computed.bool('credentials.profileable_type' === 'Teacher'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    }
  }
});
