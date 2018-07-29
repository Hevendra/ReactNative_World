import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class RoundedBlueButton extends Component {
    constructor(props) {
        super(props)
        this.state = { pressStatus: false };
    }

    onPress() {
        if (this.state.pressStatus)
            this.setState({ pressStatus: false });
        else
            this.setState({ pressStatus: true });

    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={this.state.pressStatus ? styles.buttonPress : styles.button}
                    onPress={this.onPress.bind(this)}
                >
                    <Text style={this.state.pressStatus ? styles.textWhite : styles.textBlue}> {this.props.text} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,

    },
    textWhite: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
    textBlue: {
        textAlign: 'center',
        color: '#2268C0'
    },
    button: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 30,
        marginRight: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#2268C0'
    },
    buttonPress: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 30,
        marginRight: 5,
        backgroundColor: '#2268C0',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#2268C0',
    },
});