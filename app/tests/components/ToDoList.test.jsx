var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'do something'
    }, {
      id: 2,
      text: 'something else'
    }];
    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);
    expect(todosComponents.length).toBe(todos.length);
  });
});
