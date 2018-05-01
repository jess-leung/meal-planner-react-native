import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddMealComponent from './AddMealComponent'
import { addMeal } from '../../store/meal/actions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InteractionManager } from 'react-native';

class AddMealScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealName: ''
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.setParams({
                onAddMealPress: this.onAddMealPress
            });
        });
    }

    getMeal = (mealName) => {
        this.setState({ mealName: mealName });
    }

    onAddMealPress = () => {
        if (this.state.mealName !== '') {
            this.props.addMeal(this.state.mealName)
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Meal',
            headerRight: < Button
                buttonStyle={{
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    margin: 12
                }
                }
                onPress={navigation.getParam('onAddMealPress')}
                title=''
                icon={
                    < Icon
                        name='plus'
                        size={15}
                        color='white'
                    />
                }
            />
        }
    }

    render() {
        return (
            <AddMealComponent
                meal={this.props.meal}
                error={this.props.error}
                navigation={this.props.navigation}
                callbackFromParent={this.getMeal} />
        );
    }
}

AddMealComponent.propTypes = {
    addMeal: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    addMeal: addMeal
};

const mapStateToProps = state => ({
    loading: state.addMeal.loading,
    error: state.addMeal.error,
    meal: state.addMeal.meal,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMealScreen)
