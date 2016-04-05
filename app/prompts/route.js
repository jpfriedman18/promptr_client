import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      prompt: this.store.findAll('prompt'),
    };
  },
  actions: {
    destroyPrompt: function(prompt){
      prompt.destroyRecord()
      .then(()=>console.log("prompt destroyed"));
    }
  }
});
