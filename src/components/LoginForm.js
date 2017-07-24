import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input} from "./common";
import firebase from 'firebase';
import {Spinner} from "./common/Spinner";

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }
    onButtonPress(){
        this.setState({loading: true});
        const {email, password} = this.state;
        this.setState({error: ''});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }
    onLoginSuccess(){
        this.setState({email: '', password: '', loading: false, error: ''})
    }

    onLoginFail(){
        this.setState({error: 'Failed to log in or create an account.', loading: false})
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>
        } else {
            return (
                <Button buttonText="Sign in" onPress={this.onButtonPress.bind(this)} display={{}}/>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="user@email.com" value={this.state.email} onChangeText={input => this.setState({email: input})} />
                </CardSection>
                <CardSection>
                    <Input label="Password" placeholder="password" secureTextEntry={true} value={this.state.password} onChangeText={input => this.setState({password: input})} />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;