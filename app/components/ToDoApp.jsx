var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    ToDoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="small-centered small-11 medium-12 large-5 columns">
            <div className="container">
              <ToDoSearch onSearch={this.handleSearch}/>
              <ToDoList />
              <AddToDo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
