import React, { Component } from 'react';
import AuthLoadingComponent from './AuthLoadingComponent';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AuthLoadingScreen extends React.Component {
    render() {
        return (<AuthLoadingComponent
            user={this.props.user}
            navigation={this.props.navigation}
        />
        )
    }
}

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
    user: state.session.user,
})

export default connect(mapStateToProps)(AuthLoadingScreen)