import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  answer1: DS.attr('string'),
  answer2: DS.attr('string'),
  answer3: DS.attr('string'),
  answer4: DS.attr('string'),
  correct: DS.attr('number'),
  points: DS.attr('number'),
  quiz_id: DS.attr('number'),
  quiz: DS.belongsTo('quiz')
});
