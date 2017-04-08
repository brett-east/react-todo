var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddToDo} = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should dispatch ADD_TODO when valid input text', () => {
    var todoText = 'string';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
