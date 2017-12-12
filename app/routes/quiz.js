import Ember from 'ember';

export default Ember.Route.extend({
  // flashMessages: Ember.inject.service(),
  auth: Ember.inject.service(),
  user_id: Ember.computed.alias('auth.credentials.id'),
  model(params){
    return Ember.RSVP.hash({
      quiz: this.get('store').findRecord('quiz', params.quiz_id),
      user: this.get('store').findRecord('user', params.user_id),
    });
  },
  actions: {
    createQuestion(question) {
      // const id = questison.quiz_id;
      let newQuestion = this.get('store').createRecord('question', question);
      newQuestion.save();
      // .then(() => this.transitionTo('quizzes'))
      // .then(() => this.transitionTo('quiz', id))
      // .then(() => this.get('flashMessages').success('Question has been created!'))
      // .catch(() =>
      //   this.get('flashMessages')
      //   .danger('Unable to create question.'))
    }
  }
});
