import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import indexPage from '../pages/index';

let application;

module('Acceptance: Home Page', {
	beforeEach: function() {
		application = startApp();
	},
	afterEach: function() {
		Ember.run(application, 'destroy');
	}
});

test('Home page exists', function(assert) {
	assert.expect(1);

	indexPage.visit();

	andThen(function() {
		assert.equal(currentURL(), '/');
	});
});