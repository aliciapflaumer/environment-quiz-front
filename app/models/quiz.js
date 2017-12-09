import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  hidden: DS.attr('boolean'),
  question: DS.hasMany('question')
});
