import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record){
    const api = this.get('host');
    // console.log('this is record ', record);
    let serialized = this.serialize(record);
    let quizId = serialized.quiz_id;
    const url = api + '/quizzes/' + quizId + '/questions';
    const data = {question: serialized};
    return this.ajax(url, 'POST', {data});
  }
});
