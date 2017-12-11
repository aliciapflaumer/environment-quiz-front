import Ember from 'ember';

export default Ember.Route.extend({
  model () {
     return this.get('store').findRecord('question', params.question_id);
   },
   actions: {
     createQuestion(newQuestion, question) {
       question.set('title', newQuestion.title);
       question.set('answer1', newQuestion.answer1);
       question.set('answer2', newQuestion.answer2);
       question.set('answer3', newQuestion.answer3);
       question.set('answer4', newQuestion.answer4);
       question.set('correct', newQuestion.correct);
       question.set('points', newQuestion.points);
       question.save()
     }
  }
});
