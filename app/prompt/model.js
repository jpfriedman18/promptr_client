import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  promptResponses: DS.hasMany('prompt-response', {async: true})
});
