import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  actions: {
    setTeacher () {
      this.set('credentials.profileable_type', 'Teacher');
    },
    setStudent () {
      this.set('credentials.profileable_type', 'Student');
    },
    submit () {
      if (this.get('credentials.profileable_type')) {
        // console.log(this.get('credentials'));
        this.sendAction('submit', this.get('credentials'));
      }
    },
    reset () {
      this.set('credentials', {});
    },
  },
});
