import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      prompt: this.store.findAll('prompt'),
    };
  },
  actions: {
    createPrompt: function(properties){
      this.store.createRecord('prompt', properties)
        .save().then(()=>console.log('prompt created'));
    },
    destroyPrompt: function(prompt){
      prompt.destroyRecord()
      .then(()=>console.log("prompt destroyed"));
    }
  }
});
