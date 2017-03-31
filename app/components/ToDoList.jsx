var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
  render: function (){
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = ToDoList;
