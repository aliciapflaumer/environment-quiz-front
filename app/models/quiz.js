import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  category: DS.attr('string'),
  questions: DS.hasMany('question')
});
