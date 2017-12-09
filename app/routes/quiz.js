import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('quiz', params.quiz_id);
  },
  actions: {
    toggleQuestionDone(question){
      question.toggleProperty('done');
      question.save();
    },
    createQuestion(question) {
      // console.log('this is question', question);
      let newQuestion = this.get('store').createRecord('question', question);
      newQuestion.save();
    }
  }
});
