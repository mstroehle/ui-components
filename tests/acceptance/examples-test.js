import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | examples', function(hooks) {
  setupApplicationTest(hooks);

  test('examples visual check', async function(assert) {
    await visit('/examples/registration');
    assert.equal(currentURL(), '/examples/registration');

    percySnapshot('Sample Registration Form');

    await a11yAudit();
    assert.ok(true, 'no a11y errors found!');
  });
});