import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,   
         Platform,       
         BackHandler,Button,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ItineraryView extends React.Component {

    constructor(props) {
    	super(props)           
    }

    static navigationOptions = {
      title: 'Itinerario Estudiantil',
    };

    render() {                
        return (
        	<View>
            <Text>Itinerario Estudiantil</Text>
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        //sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(ItineraryView);