import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('prompt-response-snippet', 'Integration | Component | prompt response snippet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{prompt-response-snippet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#prompt-response-snippet}}
      template block text
    {{/prompt-response-snippet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
