import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: {
    content: null,
    done: false
  },
  actions: {
    createQuestion() {
      // console.log('submitted');
      // console.log(this.get('newQuestion'));
      this.sendAction('createQuestion', this.get('newQuestion'));
      return this.set('newQuestion.content', null);
    }
  }
});
