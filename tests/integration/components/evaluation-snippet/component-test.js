import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('evaluation-snippet', 'Integration | Component | evaluation snippet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{evaluation-snippet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#evaluation-snippet}}
      template block text
    {{/evaluation-snippet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
