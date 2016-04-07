import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  prompts: DS.hasMany('prompt', {async: true}),
  evaluations: DS.hasMany('evaluation', {async: true})
});
