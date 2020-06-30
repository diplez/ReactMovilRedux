import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,   
         Platform,       
         BackHandler,Button,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSessionData }  from './../../utils/sessionData';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { WIDTH } from './../../utils/dimension';

class AgendaView extends React.Component {

    constructor(props) {
    	super(props)           
    }

    static navigationOptions = {
      title: 'Agenda',
    };

    render() {                
        return (
        	<View>
                <ScrollView style={{width:WIDTH}}>                
                <CalendarList
                  // Enable horizontal scrolling, default = false
                  horizontal={true}
                  // Enable paging on horizontal, default = false
                  pagingEnabled={true}
                  calendarWidth={WIDTH}
                  // Set custom calendarWidth.
                   theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: 'red',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    monthTextColor: 'blue',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textMonthFontWeight: 'bold',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                  }}
                />
                </ScrollView>
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        //sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(AgendaView);

