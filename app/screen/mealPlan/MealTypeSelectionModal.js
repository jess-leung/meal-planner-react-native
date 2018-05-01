import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    Modal
  } from 'react-native';

class MealTypeSelectionModal extends Component {
    render() {
        return (
            <Modal
                visible={this.props.showAddMealModal}
                transparent={true}>
                <Text>TEST MODAL</Text>
            </Modal>
        );
    }
}
export default MealTypeSelectionModal