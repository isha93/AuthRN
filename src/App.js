import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header, Button, CardSection, Spinner, Card} from './Components/common';
import firebase from 'firebase';
import LoginForm from './Components/LoginFrom'


class App extends Component{
  state = {loggedIn : null}
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBeF3QBb0sSaf64hPVk4PjcATgKHLf--KU',
      authDomain: 'authrn-51258.firebaseapp.com',
      databaseURL: 'https://authrn-51258.firebaseio.com',
      projectId: 'authrn-51258',
      storageBucket: 'authrn-51258.appspot.com',
      messagingSenderId: '165030088721'
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (<CardSection>
                <Button onPress={()=> firebase.auth().signOut()}>
                  Log Out
                </Button>
               </CardSection>
               );
      case false:
        return <LoginForm />;
      default:
      return (
        <View style={{flex:1}}>
           <Spinner size = 'large'/>
        </View>
     );
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header judul={'Login'} />
        {this.renderContent()}
        </View>
    );
  }
}

export default App;
