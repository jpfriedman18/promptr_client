import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      evaluations: this.get('store').findAll('evaluation'),
    };
  },
});
