import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import DateSelection from './DateSelection'
import CalendarView from './CalendarView'

export default class Routers extends Component {

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="dateSelection" component={DateSelection}  hideNavBar={true} initial={true}/>
                    <Scene key="calendarAction" component={CalendarView}  hideNavBar={true} />
                    
                </Stack>
            </Router>

        );
    }

}