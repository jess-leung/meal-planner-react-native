import React, { component } from 'react'
import PropTypes from 'prop-types'
import BasicLoginFormComponent from './BasicLoginFormComponent';
import {
    Text,
    View,
    Alert
} from 'react-native';
import {
    Button,
} from 'react-native-elements';

class LoginFormComponent extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert('Error', this.props.error);
        }

        if(!prevProps.error && !this.props.error && this.props.user != null) {
            this.props.navigation.navigate('MealPlan')
        }
    }

    render() {
        return (
            <View>
                <BasicLoginFormComponent
                    buttonTitle='Login'
                    onButtonPress={this.props.loginUser} />
                <Button
                    raised
                    transparent
                    containerStyle={{ margin: 16 }}
                    title='Register'
                    onPress={this.props.goToRegistration} />
            </View >
        )
    }
}

LoginFormComponent.propTypes = {
    loginUser: PropTypes.func.isRequired,
    goToRegistration: PropTypes.func.isRequired,
    error: PropTypes.string,
    user: PropTypes.string
}

export default LoginFormComponent