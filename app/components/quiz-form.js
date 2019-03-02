import Ember from 'ember';

export default Ember.Component.extend({

  newQuiz: {
    title: null,
    category: null,
    hidden: false
  },
  actions: {
    createQuiz() {
      this.sendAction('createQuiz', this.get('newQuiz'));
      this.set('newQuiz.title', null);
      this.set('newQuiz.category', null);
    }
  }

});
