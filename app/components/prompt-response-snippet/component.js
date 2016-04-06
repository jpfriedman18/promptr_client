import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isTeacher: Ember.computed.alias('auth.isTeacher'),
  evaluating: false,
  actions: {
    toggleEvaluating: function(){
      this.toggleProperty('evaluating');
    }
  },
});
