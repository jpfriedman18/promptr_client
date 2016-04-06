import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createEvaluation: function(){
      this.set('form.promptResponse', this.get('promptResponse'));
      this.sendAction('createEvaluation', this.get('form'));
      this.set('form', {});
    }
  }
});
