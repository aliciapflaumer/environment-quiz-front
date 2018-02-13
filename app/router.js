import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('quizzes', function() {
    this.route('quiz', { path: ':quiz_id' }, function() {
      this.route('results');
    });
  });
  this.route('quiz');
});

export default Router;
