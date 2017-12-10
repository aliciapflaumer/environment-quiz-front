import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  user_id: Ember.computed.alias('auth.credentials.id'),
  model(params){
    quiz: this.get('store').findRecord('quiz', params.quiz_id);
  },
  actions: {
    createQuestion(question) {
      // console.log('this is question', question);
      let newQuestion = this.get('store').createRecord('question', question);
      newQuestion.save();

    }
  }
});
