import Ember from 'ember';

export default Ember.Component.extend({
  newQuiz: {},
  actions: {
    createQuiz() {
      // console.log(this.get('newQuiz'));
      this.sendAction('createQuiz', this.get('newQuiz'));
      this.set('newQuiz.title', null);
    }
  }
});
