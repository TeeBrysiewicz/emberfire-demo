import {
	create,
	clickable,
	fillable,
	visitable
} from 'ember-cli-page-object';

export default create({
	visit: visitable('/tasks/new'),

	form: {
		scope: '.newtask-form',

		title: fillable('[name=title]'),
		description: fillable('[name=description]'),
		date: fillable('[name=date]'),
		submit: clickable('[name=submit]')
	}
});