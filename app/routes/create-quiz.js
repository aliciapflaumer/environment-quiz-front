import Ember from 'ember';

export default Ember.Route.extend({
  // flashMessages: Ember.inject.service(),
  actions: {
    createQuiz (quiz) {
      let newQuiz = this.get('store').createRecord('quiz', quiz);
      newQuiz.save()
      // .then(() => this.get('flashMessages').success('Quiz was created!'))
      // .then(() => this.transitionTo('quizzes'))
      // .catch(() =>
      //   this.get('flashMessages')
      //   .danger('Unable to a create quiz. Please fill out all of the form fields.')
      // );
    }
  }
});
