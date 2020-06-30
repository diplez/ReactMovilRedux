import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,   
         Platform,       
         BackHandler,Button,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ScheduleView extends React.Component {

    constructor(props) {
    	super(props)           
    }

    static navigationOptions = {
      title: 'Horario de Clases',
    };

    render() {                
        return (
        	<View>
            <Text>Horario de Clases</Text>
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        //sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(ScheduleView);

