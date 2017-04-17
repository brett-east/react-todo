var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  }); // describe searchTextReducer

  describe('showCompletedReducer', () => {
    it('should toggle complete status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  }); // describe showCompletedReducer


  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something to do',
          complete: false,
          createdAt: 13434
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    //start with a real todos array and then check the completed status after the reducers
    //generate action with matching id
    //call reducer and assert completed flipped

    it('should update todo', () => {
      var todos = [{
        id: 3,
        text: 'Wash car',
        completed: false,
        createdAt: 12435,
        completedAt: undefined
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      console.log(res);

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        createdAt: 3300,
        completedAt: undefined
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  }); // describe todosReducer

  describe('authReducer', () => {

    it('should add uid to auth on login', () => {
      var action = {
        type: 'LOGIN',
        uid: '123abc'
      };

      var res = reducers.authReducer(df({}), df(action));

      expect(res.uid).toEqual(action.uid);
    });


    it('should remove uid from auth on logout', () => {
      var authData = {
        uid: '123abc'
      };
      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });

  }); // describe authReducer

});
