import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input} from './common';
import firebase from 'firebase';

export default class LoginForm extends Component{
    state = {email : '', pass:'', error: ''};
    
    onButtonPress(){
        const {email,pass} = this.state;

        this.setState({error: ''})
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,pass)
            .catch(()=> {
                this.setState({error: 'Authentication Failed. '});
            });
        });
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder = "user@gmail.com"
                        label = "Email"
                        value={this.state.email} 
                        onChangeText={email => this.setState({email})}
                        />
                </CardSection>
                <CardSection>
                    <Input
                        secureText
                        placeholder = "password"
                        label = "Password"
                        value={this.state.pass} 
                        onChangeText={pass => this.setState({pass})}
                        />
                </CardSection>
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles= {
    errorStyle: {
        fontSize : 20,
        alignSelf : 'center',
        color: 'red'
    }
}