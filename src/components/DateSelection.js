import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'
import RoundedLightBlueButton from './RoundedLightBlueButton';
import RoundedBlueButton from './RoundedBlueButton'
import { Actions } from 'react-native-router-flux';

export default class DateSelection extends Component {
  

  state = {
    forValue: 'Today',
    starts: 'Now',
    rooms: '7 rooms available'
  };

  currentDay(){
    var today = new Date();
    //date=today.getFullYear() + "-"+ parseInt(today.getMonth()+1) +"-"+ today.getDate();
    return today.getDate();;
  }

  add(){
    return x + y;
  }

  handleChangeValue = selectedDay => {
    console.log(">>>>>Selected Day InSide DateSelection: "+selectedDay)
    this.setState({forValue: selectedDay})
  };

  onPress() {
    var date=this.currentDay();
    Actions.calendarAction({ selected: this.state.forValue, todayDate:date, onChangeValue:this.handleChangeValue });
    console.log("OnPress Called>>>>");
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtHint}>For</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.txtHeading}>{this.state.forValue}</Text>
          <TouchableOpacity onPress={this.onPress.bind(this)}>
            <Text style={styles.button}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txtHint}>Starts</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.txtHeading}>{this.state.starts}</Text>
          <TouchableOpacity  >
            <Text style={styles.button}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.txtHint}>Duration</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <RoundedBlueButton pressStatus={true} text='30 minutes' />
            <RoundedBlueButton text='45 minutes' />
            <RoundedBlueButton text='1 hour' />
            <RoundedBlueButton text='2 hours' />
          </ScrollView>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.txtHint}>Location</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <RoundedBlueButton pressStatus={true} text='SVL-2.5' />
            <RoundedBlueButton text='SVL-2.2' />
            <RoundedBlueButton text='SVL-1.2' />
            <RoundedBlueButton text='SVL-1.0' />
          </ScrollView>
        </View>
        <View style={{ marginTop: 60 }}>
          <Text style={styles.txtHint}>{this.state.rooms}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <RoundedLightBlueButton text='Astros' />
            <RoundedLightBlueButton text='Angels' />
            <RoundedLightBlueButton text='Astros' />
            <RoundedLightBlueButton text='Angels' />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 10,
  },
  txtHeading: {
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: 'black'

  },
  txtHint: {
    fontSize: 14,
    textAlign: 'left',
    color: '#a8a8a8',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    fontSize: 16,
    margin: 10,
    color: '#2268C0',
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
