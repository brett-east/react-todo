import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyByzDQzyEWkbBgnTwz-VJHlzw3rZARbA-s",
    authDomain: "east-todo-app.firebaseapp.com",
    databaseURL: "https://east-todo-app.firebaseio.com",
    projectId: "east-todo-app",
    storageBucket: "east-todo-app.appspot.com",
    messagingSenderId: "275104484626"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
