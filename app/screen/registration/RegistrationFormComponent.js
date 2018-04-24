import React from 'react'
import PropTypes from 'prop-types'
import BasicLoginFormComponent from '../login/BasicLoginFormComponent';
 
const RegistrationFormComponent = props =>
  <BasicLoginFormComponent
    buttonTitle='Register'
    onButtonPress={props.register} />
 
RegistrationFormComponent.propTypes = {
    register: PropTypes.func.isRequired
}
 
export default RegistrationFormComponent