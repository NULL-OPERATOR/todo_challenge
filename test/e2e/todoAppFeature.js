describe('SO MUCH TO DO', function() {
  var enterTodo = element(by.className('enterTodo'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
    enterTodo.sendKeys('SUPPORFEED');
    element(by.className("enterTodo")).click();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('2do');
  });

 it('adds a todo', function() {

  // var firsttodo = element(by.model('todoCtrl.todo.text'))
  // console.log(firsttodo.getText())
  //  var firsttodo = element.all(by.repeater('todo.text in todoCtrl.todos'));
  // expect(firsttodo.element.getAttribute('value')).toEqual('SUPPORFEED');
  // var todos = element.all(by.repeater('todo in todoCtrl.todos'));
  // expect(todos.getAttribute('value')).toEqual('SUPPORFEED');
  //  expect(element(by.binding('todo.text')).getText()).toEqual('SUPPORFEED');
  //  var profiles = element.all(by.repeater('todo in todoCtrl.searchResult.todos'));
  //  expect(profiles.getAttribute('value')).toEqual('SUPPORFEED'); ;
 });

 it('deletes a todo', function() {
   element(by.className("delTodo")).click();
  // element.all(by.repeater('SUPPORFEED in todo.text'));

 });
});
