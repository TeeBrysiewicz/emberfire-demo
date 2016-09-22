import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
// import indexPage from '../pages/index';
import newTaskPage from '../pages/newtask';

let application;

// Initialize/Deinitialize Environments
module('Acceptance: New Task', {
	beforeEach: function() {
		application = startApp();
	},
	afterEach: function() {
		Ember.run(application, 'destroy');
	}
});

// Test With Ember-CLI-Page-Object Addon
test('New task form is clickable', (assert) => {
	assert.expect(3);

	newTaskPage.visit();

	andThen(() => {
		newTaskPage.form.title('My Test Title').description('my test description').submit();

		andThen(() => {
			assert.equal();
		});
	});

	// let newTaskDone = assert.async();

	// server.post('/tasks/', (db, request) => {
	// 	let params = JSON.parse(request,requestBody).data.attributes;
	// 	params["state"] = "new_task";

	// 	assert.equal(params.title, 'My Test Title');
	// 	assert.equal(params.description, 'my test description');
	// });

	// newTaskDone();

	// return db.create('task', params);

});

// Test W/O Ember-CLI-Page-Object
// test('should create new task', function(assert) {
// 	assert.expect(1);

//  	visit('/tasks/new');
//  	fillIn('input.title', 'My Test Task');
// 	// fillIn('textarea.description', 'My Test Description');
// 	click('button.submit');
// 	andThen(() => assert.equal(find('div.task:last').text(), 'My New Task'));
// });
