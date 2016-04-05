import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPrompt: function(properties){
      console.log("Route action");
      this.store.createRecord('prompt', properties)
        .save().then(()=>console.log('prompt created'));
    }
  }
});
