import Ember from 'ember';

export default Ember.Route.extend({
  model () {
     return this.get('store').findAll('quiz');
   },
   actions: {
     createQuiz(quiz) {
       let newQuiz = this.get('store').createRecord('quiz', quiz);
       newQuiz.save();
     },
     deleteQuiz(quiz) {
       quiz.destroyRecord();
     }
   //   updateQuiz(quiz, title) {
   //     quiz.set('title', title)
   //   }
   }
});
