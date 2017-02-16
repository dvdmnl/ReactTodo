import firebase from 'firebase'

try {
    var config = {
        apiKey: "AIzaSyAwsvgJIHXP20S1eioGXea_8dJDVoZh7gk",
        authDomain: "my-todo-app-9f5a0.firebaseapp.com",
        databaseURL: "https://my-todo-app-9f5a0.firebaseio.com",
        storageBucket: "my-todo-app-9f5a0.appspot.com",
        messagingSenderId: "1079581271818"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;