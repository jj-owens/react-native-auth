import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'
import {Header} from './components/common'
import LoginForm from './components/LoginForm'



class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAx9fjh9uc_qG2EuNni_41nC_vPDJ2AvEw",
            authDomain: "authentication-67c79.firebaseapp.com",
            databaseURL: "https://authentication-67c79.firebaseio.com",
            projectId: "authentication-67c79",
            storageBucket: "authentication-67c79.appspot.com",
            messagingSenderId: "12295720400"
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        )
    }
}

export default App;
