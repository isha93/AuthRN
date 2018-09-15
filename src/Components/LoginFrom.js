import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';

export default class LoginForm extends Component{
    state = {email : '', pass:'', error: '', loading: false};
    
    onButtonPress(){
        const {email,pass} = this.state;

        this.setState({error: '', loading: true});
    
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,pass)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this))
        });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            pass: '',
            error:'',
            loading: false
        })

    }
    onLoginFailed(){
        this.setState({
            error: 'Authentication Failed Please Try Again!',
            loading: false
        })
    }


    onButtonRender(){
        if(this.state.loading){
            return <Spinner size='small'/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
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
                   {this.onButtonRender()}
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