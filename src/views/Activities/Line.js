import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,          
         BackHandler} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSessionData }  from './../../utils/sessionData';
import { HEIGHT } from './../../utils/dimension';

class LineView extends React.Component {

    constructor(props) {
    	super(props)
    }
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);                        
    }    

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        this.props.navigation.goBack()        
        return true;
    }    

    render() {        
        return (
        	<View>
        		<Text>
                   HOLA A LA PAGINA 2 {this.props.navigation.state.params.name}
                </Text>
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        //sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(LineView);

