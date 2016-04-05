import Ember from 'ember';

export default Ember.Component.extend({
  showText: false,
  doubleClick: function(){
    this.toggleProperty('showText');
  },
  actions: {
    destroyPrompt: function(){
      this.sendAction('destroyPrompt', this.get('prompt'));
    }
  },
});
