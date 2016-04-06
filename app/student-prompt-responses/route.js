import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      promptResponse: this.get('store').findAll('prompt_response'),
      prompt: this.get('store').findAll('prompt'),
    };
  },
});
