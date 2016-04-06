import DS from 'ember-data';

export default DS.Model.extend({
  grammar: DS.attr('number'),
  vocabulary: DS.attr('number'),
  structure: DS.attr('number'),
  spelling: DS.attr('number'),
  creativity: DS.attr('number'),
  notes: DS.attr('string'),
  promptResponse: DS.belongsTo('prompt-response', {async: true})
});
