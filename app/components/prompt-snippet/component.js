import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  actions: {
    updatePrompt: function(){
      this.sendAction('updatePrompt', this.get('prompt'));
      this.set('isEditable', false);
    },
    destroyPrompt: function(){
      this.sendAction('destroyPrompt', this.get('prompt'));
    },
    toggleEditable: function(){
      this.toggleProperty('isEditable');
    },
  },
});
