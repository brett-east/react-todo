var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
var ToDoApp = require('ToDoApp');
import ToDoList from 'ToDoList';


describe('ToDoApp', () => {
  it('should exist', () => {
      expect(ToDoApp).toExist();
    });


  it('should render ToDoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, ToDoList);

    expect(todoList.length).toEqual(1);
  });
});
