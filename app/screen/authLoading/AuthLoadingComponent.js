
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
class AuthLoadingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.checkAuthState(this.props.user);
    }

    checkAuthState = (user) => {
        this.props.navigation.navigate(user != null ? 'App' : 'Auth');
    }

    render() {
        return (
            <ActivityIndicator />
        );
    }
}

export default AuthLoadingComponent