import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createPromptResponse: function(){
      this.set('form.prompt', this.get('prompt'));
      this.sendAction('createPromptResponse', this.get('form'));
      this.set('form', {});
    }
  }
});
