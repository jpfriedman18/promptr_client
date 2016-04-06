import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  prompt_id: DS.attr('number')
});
