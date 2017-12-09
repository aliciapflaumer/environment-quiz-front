import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: {
    content: null,
    done: false
  },
  actions: {
    createQuestion() {
      // console.log('submitted');
      console.log(this.get('newQuestion'));
    }
  }
});
