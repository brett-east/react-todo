var React = require('react');
var {connect} = require('react-redux');
import ToDo from 'ToDo';
var ToDoAPI = require('ToDoAPI');

export var ToDoList = React.createClass({
  render: function (){
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return filteredTodos.map((todo) => {
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

export default connect(
  (state) => {
    return state;
  }
)(ToDoList);
