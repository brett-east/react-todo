import React from 'react';
import * as Redux from 'react-redux';

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
import * as actions from 'actions';

export class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="small-centered small-11 medium-12 large-5 columns">
            <div className="container">
              <ToDoSearch/>
              <ToDoList/>
              <AddToDo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Redux.connect()(ToDoApp);
