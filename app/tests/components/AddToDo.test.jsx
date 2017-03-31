var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should call onAddTodo if valid data is entered', () => {
    var todoText = 'string';
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);

  });

  it('should not call onAddTodo if invalid data is entered', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
