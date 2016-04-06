import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      evaluation: this.get('store').findAll('evaluation'),
      // promptResponse: this.get('store').findAll('prompt_response'),
    };
  },
  actions:{
    logEvaluations: function(){
      console.log(this.get('model.evaluation'));
    },
  }
});
