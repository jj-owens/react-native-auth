import React, {Component} from 'react'
import {View} from 'react-native'
import firebase from 'firebase'
import {Header} from './components/common'
import LoginForm from './components/LoginForm'
import {Button} from "./components/common/Button";
import {Spinner} from "./components/common/Spinner";



class App extends Component {
   state = {signedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAx9fjh9uc_qG2EuNni_41nC_vPDJ2AvEw",
            authDomain: "authentication-67c79.firebaseapp.com",
            databaseURL: "https://authentication-67c79.firebaseio.com",
            projectId: "authentication-67c79",
            storageBucket: "authentication-67c79.appspot.com",
            messagingSenderId: "12295720400"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({signedIn: true})
            } else {
                this.setState({signedIn: false})
            }
        })
    }

    renderContent(){
        switch (this.state.signedIn){
            case false:
                return <LoginForm />;
            case true:
                return(
                    <Button onPress={() => firebase.auth().signOut()} buttonText="Log Out">Log out</Button>
                );
            default:
                return <Spinner size="large"/>

        }
    }

    render() {
        return (
            <View style={styles.page}>
                <Header headerText="Authentication"/>
                    {this.renderContent()}
            </View>
        )
    }
}

const styles = {
    page: {
        height: 120
    }
}
export default App;
