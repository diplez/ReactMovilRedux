import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,   
         Platform,       
         BackHandler,Button,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ReportView extends React.Component {

    constructor(props) {
    	super(props)           
    }

    static navigationOptions = {
      title: 'Reportes',
    };

    render() {                
        return (
        	<View>
                <Text>Reportes de institucion</Text>
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        //sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(ReportView);