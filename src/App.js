import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header} from './Components/common';
import firebase from 'firebase';
import LoginForm from './Components/LoginFrom'


class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBeF3QBb0sSaf64hPVk4PjcATgKHLf--KU',
      authDomain: 'authrn-51258.firebaseapp.com',
      databaseURL: 'https://authrn-51258.firebaseio.com',
      projectId: 'authrn-51258',
      storageBucket: 'authrn-51258.appspot.com',
      messagingSenderId: '165030088721'
    });
  }

  render() {
    return (
      <View>
        <Header judul={'Login'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
