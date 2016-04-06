import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createPromptResponse: function(){
      this.set('form.prompt_id', this.get('prompt_id'));
      console.log(this.get('form'));
      this.sendAction('createPromptResponse', this.get('form'));
      this.set('form', {});
    }
  }
});
