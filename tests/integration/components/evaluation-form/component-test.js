import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('evaluation-form', 'Integration | Component | evaluation form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{evaluation-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#evaluation-form}}
      template block text
    {{/evaluation-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
