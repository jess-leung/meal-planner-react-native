import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    Modal,
    InteractionManager
} from 'react-native';
import {
    Button,
    ButtonGroup
} from 'react-native-elements';

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

class MealTypeSelectionModal extends React.Component {
    setClosingModal = () => {
        this.setState({ isModalVisible: false });
    }

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: this.props.isAddingMeal
        }
        this.updateSelectedMealType = (selectedIndex) => {
            this.setClosingModal();
            this.props.onMealAdded(mealTypes[selectedIndex]);
        }
    }

    render() {
        return (
            <Modal
                visible={this.state.isModalVisible}
                transparent={true} >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }} >
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        height: 250,
                        padding: 16
                    }}>
                        <Text>Choose meal type</Text>
                        <ButtonGroup
                            onPress={this.updateSelectedMealType}
                            buttons={mealTypes}
                            containerBorderRadius='0'
                            containerStyle={{
                                flex: 1,
                                flexDirection: 'column'
                            }} />
                        <Button
                            onPress={this.setClosingModal}
                            title='Cancel' />
                    </View>
                </View>
            </Modal >
        );
    }
}



export default MealTypeSelectionModal