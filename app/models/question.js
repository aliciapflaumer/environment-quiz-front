import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  done: DS.attr('boolean'),
  quiz: DS.belongsTo('quiz')
});
