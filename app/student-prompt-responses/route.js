import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      promptResponse: this.store.findAll('prompt_response'),
      prompt: this.store.findAll('prompt'),
    };
  },
});
