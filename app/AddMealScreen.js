import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    Button,
    Input,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MealPlanScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Meal',
        headerRight: (
            <Button
                buttonStyle={{
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    margin: 12
                }}
                onPress={() => alert('This is a button!')}
                title=''
                icon={
                    <Icon
                        name='plus'
                        size={15}
                        color='white'
                    />
                }
            />
        ),
    };

    render() {
        return (
            <Input
                containerStyle={{ margin: 16 }}
                placeholder='Meal name'
                shake={true}
            />
        );
    }
}