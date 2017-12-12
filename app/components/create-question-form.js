import Ember from 'ember';

export default Ember.Route.extend({
  newQuestion: {
    title: null,
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    correct: null,
    quiz_id: null,
    points: null,
  },
  actions: {
    createQuestion() {
      console.log('submitted');
      console.log(this.get('newQuestion'));
      this.set('newQuestion.quiz_id', this.get('quiz'));
      this.sendAction('createQuestion', this.get('newQuestion'));
      this.set('newQuestion.title', null);
      this.set('newQuestion.answer1', null);
      this.set('newQuestion.answer2', null);
      this.set('newQuestion.answer3', null);
      this.set('newQuestion.answer4', null);
      this.set('newQuestion.correct', null);
      this.set('newQuestion.points', null);
    }
  }
});
