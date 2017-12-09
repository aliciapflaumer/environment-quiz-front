import Ember from 'ember';

export default Ember.Component.extend({
  newQuiz: {
    title: null,
    hidden: false
  },
  actions: {
    createQuiz() {
      console.log(this.get('newQuiz'));
    }
  }
});
