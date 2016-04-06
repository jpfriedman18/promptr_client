import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      prompt: this.get('store').findAll('prompt'),
      promptResponse: this.get('store').findAll('prompt_response'),
    };
  },
  actions: {
    updatePrompt: function(prompt) {
      prompt.save()
      .then(()=>console.log("Saved"));
    },
    destroyPrompt: function(prompt){
      prompt.destroyRecord()
      .then(()=>console.log("prompt destroyed"));
    },
    createPromptResponse: function(promptResponse){
      this.store.createRecord('prompt_response', promptResponse)
        .save().then(()=>console.log('response created'))
        .then(()=> this.transitionTo('student-landing'));
    }
  }
});
