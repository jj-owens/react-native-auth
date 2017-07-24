import React, {Component} from 'react'
import {TextInput} from 'react-native'
import {Button, Card, CardSection} from "./common"

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput/>
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button buttonText="Sign in" />
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm