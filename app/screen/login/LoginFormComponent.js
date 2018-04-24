import React, { component } from 'react'
import PropTypes from 'prop-types'
import BasicLoginFormComponent from './BasicLoginFormComponent';
import {
    Text,
    View,
} from 'react-native';
import {
    Button,
} from 'react-native-elements';

const LoginFormComponent = props => {
    return (
        <View>
            <BasicLoginFormComponent
                buttonTitle='Login'
                onButtonPress={props.login} />
            <Button
                raised
                transparent
                containerStyle={{ margin: 16 }}
                title='Register'
                onPress={props.goToRegistration} />
        </View>
    )

}

LoginFormComponent.propTypes = {
    login: PropTypes.func.isRequired,
    goToRegistration: PropTypes.func.isRequired
}

export default LoginFormComponent