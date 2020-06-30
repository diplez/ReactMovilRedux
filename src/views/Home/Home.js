import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,          
         BackHandler} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HomeView extends React.Component {

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
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            }, ], {
                cancelable: false
            }
         )
     return true;
   }

    render() {
        return (
        	<View>
        		<Text>
                    HOLA TE HAS AUTENTICADO CORRECTAMENTE 
                    {this.props.sessionData.info.name}
                </Text>
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(HomeView);

