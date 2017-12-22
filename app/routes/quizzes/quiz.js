import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      quiz: this.get('store').findRecord('quiz', params.quiz_id)
    });
  }
});
