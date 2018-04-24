import React, { Component } from 'react';
import {
    Button,
    Input,
} from 'react-native-elements';
import {
    View,
} from 'react-native';
import PropTypes from 'prop-types';

class BasicLoginFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleEmailChange = (email) => {
            this.setState({ email: email });
        }
        this.handlePasswordChange = (password) => {
            this.setState({ password: password });
        }
        this.onButtonPress = () => {
            // this.props.onButtonPress(this.state.email, this.state.password)
        }
    }

    render() {
        return (
            <View>
                <Input
                    containerStyle={{ margin: 16 }}
                    placeholder='Email'
                    shake={true}
                    onChangeText={this.handleEmailChange}
                    value={this.state.email}
                />
                <Input
                    containerStyle={{ margin: 16 }}
                    placeholder='Password'
                    shake={true}
                    onChangeText={this.handlePasswordChange}
                    value={this.state.password}
                />
                <Button
                    raised
                    containerStyle={{ margin: 16 }}
                    title={this.props.buttonTitle}
                    onPress={this.onButtonPress} />
            </View>
            )
        }
}

BasicLoginFormComponent.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    onButtonPress: PropTypes.func.isRequired,
  }
 
export default BasicLoginFormComponent