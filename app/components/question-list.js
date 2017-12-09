import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['environment-quiz-api'],
  classNameBindings: ['quizDetailHidden'],
  quizDetailHidden: false,
  actions: {
    createQuestion(question) {
      return this.sendAction('createQuestion', question);
    }
  },
});
