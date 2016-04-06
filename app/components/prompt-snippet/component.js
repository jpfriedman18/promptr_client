import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  responding: false,
  auth: Ember.inject.service(),
  isTeacher: Ember.computed.alias('auth.isTeacher'),
  actions: {
    updatePrompt: function(){
      this.sendAction('updatePrompt', this.get('prompt'));
      this.set('isEditable', false);
    },
    destroyPrompt: function(){
      this.sendAction('destroyPrompt', this.get('prompt'));
    },
    toggleEditable: function(){
      this.toggleProperty('isEditable');
    },
    toggleResponding: function(){
      this.toggleProperty('responding');
    },
    createPromptResponse: function(promptResponse){
      this.sendAction('createPromptResponse', promptResponse);
    },
    logPromptResponses: function(){
      let responses = this.get('prompt.promptResponses')
      console.log(responses);
    }
  },
});
