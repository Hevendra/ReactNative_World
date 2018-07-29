import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Calendar, CalendarList } from 'react-native-calendars';
import { Actions } from 'react-native-router-flux';

export default class CalendarView extends Component {
    constructor(props) {
        super(props)
        this.state = {selected:props.selected};
        this.onDayPress = this.onDayPress.bind(this);
        console.log('>>>>Current Day: ' + CalendarList.dateString)
        console.log('>>>>Current Day: ' + CalendarList.day)
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
        console.log('>>>>Day: ' + day.dateString)
    }

    onDonePress() {
        Actions.pop();
      }

    render() {
        return (
            <View>

                <Text style={styles.txtHint}>For</Text>
                <View style={styles.headerContainer}>
                    <Text style={styles.txtHeading}>{this.state.selected}</Text>
                    <TouchableOpacity  onPress={this.onDonePress.bind(this)}>
                        <Text style={styles.button}>Done</Text>
                    </TouchableOpacity>

                </View>

                <CalendarList

                    onDayPress={this.onDayPress}
                    markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
                    pastScrollRange={50}
                    futureScrollRange={50}
                    scrollEnabled={true}
                    showScrollIndicator={true}
                    onDayChange={(day) => { console.log('day changed') }}
                    theme={{
                        //calendarBackground: '#333248',
                        //textSectionTitleColor: 'white',
                        //dayTextColor: 'red',
                        //todayTextColor: 'red',
                        //todayTextBackgroundColor:'#333248',
                        //selectedDayTextColor: 'white',
                        //monthTextColor: 'red',
                        //selectedDayBackgroundColor: '#333248',
                        //arrowColor: 'white',
                        /*'stylesheet.calendar.header': {
                          week: {
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }
                        }*/
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
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
        color: '#00BCD4',
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
});
