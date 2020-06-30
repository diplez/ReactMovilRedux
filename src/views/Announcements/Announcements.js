import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,   
         Platform,       
         BackHandler,Button,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AnnouncementsView extends React.Component {

    constructor(props) {
    	super(props)           
    }

    static navigationOptions = {
      title: 'Avisos',
    };

    render() {                
        return (
        	<View>
                <Text>AVISOS</Text>
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        //sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(AnnouncementsView);