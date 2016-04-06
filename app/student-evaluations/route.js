import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      evaluation: this.get('store').findAll('evaluation'),
    };
  },
});
