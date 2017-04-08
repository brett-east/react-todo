var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var ToDoList = require('ToDoList');
import {configure} from 'configureStore';
import ConnectedTodoList, {ToDoList} from 'ToDoList';
import ConnectedToDo, {ToDo} from 'ToDo';

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'do something',
      completed: false,
      createdAt: 500,
      completedAt: undefined
    }, {
      id: 2,
      text: 'something else',
      completed: false,
      createdAt: 500,
      completedAt: undefined
    }];
    var store = configure({
      todos: todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedToDo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
