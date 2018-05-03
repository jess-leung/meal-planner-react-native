import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

class PlannedMealsList extends React.Component {
    render() {
        if (this.props.plannedMeals && this.props.plannedMeals.length > 0) {
            return (
                <FlatList
                    data={this.props.plannedMeals}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
            );
        } else {
            return (
                <Text>No meals today</Text>
            )
        }
    }
}

export default PlannedMealsList