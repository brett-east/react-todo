var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the car'
        },
        {
          id: 3,
          text: 'Take out the rubbish'
        },
        {
          id: 4,
          text: 'Clean the shower'
        }
      ]
    };
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <ToDoList todos={todos}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
