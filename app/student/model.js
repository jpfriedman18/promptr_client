import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  promptResponses: DS.hasMany('prompt-response', {async: true})
});
