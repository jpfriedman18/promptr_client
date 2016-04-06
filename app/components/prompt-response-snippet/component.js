import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logPrompt: function(){
      console.log(this.get('promptResponse.prompt.text'));
    },
  }
});
