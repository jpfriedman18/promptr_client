import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createPrompt: function(){
      this.sendAction('createPrompt', this.get('form'));
      this.set('form', {});
    }
  }
});
