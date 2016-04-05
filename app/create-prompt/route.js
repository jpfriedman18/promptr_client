import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPrompt: function(properties){
      this.store.createRecord('prompt', properties)
        .save().then(()=>console.log('prompt created'))
        .then(()=> this.transitionTo('teacher-landing'));
    },
  }
});
