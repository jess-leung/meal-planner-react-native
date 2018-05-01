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


class MealTypeSelectionModal extends React.Component {

    component1 = () => <Text>Hello</Text>
    component2 = () => <Text>World</Text>
    component3 = () => <Text>ButtonGroup</Text>

    setClosingModal = () => {
        this.setState({ isModalVisible: false });
    }

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: this.props.isAddingMeal
        }
    }
    render() {
        const component1 = () => <Text>Breakfast</Text>
        const component2 = () => <Text>Lunch</Text>
        const component3 = () => <Text>Dinner</Text>
        const component4 = () => <Text>Snack</Text>
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }]
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
                            onPress={this.updateIndex}
                            buttons={buttons}
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