import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import {Actions} from 'react-native-router-flux';

export default class RoundedLightBlueButton extends Component{
    constructor(props){
        super(props)
    }

    onPress()
    {
      Actions.calendar;
      console.log("Hello>>>>");
    }
    render(){
        return (
            <View style={styles.container}>
            <TouchableOpacity
              style={styles.button} onPress={this.onPress.bind(this)}
            >
              <Text style={{color: 'white'}}> {this.props.text} </Text>
            </TouchableOpacity>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
   
    },
    button: {
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      paddingHorizontal:30,
      marginRight:5,
      backgroundColor:'#00BCD4',
      borderRadius:30,
      borderWidth: 1,
      borderColor: '#fff'
    }
  });