import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  prompt: DS.belongsTo('prompt', {async: true}),
  evaluation: DS.belongsTo('evaluation', {async: true}),
  student: DS.belongsTo('student', {async: true})
});
