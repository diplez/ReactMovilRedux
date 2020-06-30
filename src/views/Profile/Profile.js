import React from 'react';
import { StyleSheet,
         Text, 
         View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styleProfile from "./style";
import Profile from './../../components/Profile/Profile'

class ProfileView extends React.Component {

    constructor(props) {
    	super(props)
    }    

    static navigationOptions = {
      title: 'Perfil',
    };

    componentDidMount() {
        //console.log(this.props.sessionData)
    }

    render() {        
        return (
        	<View style={styleProfile.box}>
                <Profile sesionStore={this.props.sessionData}/>                
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
        sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(ProfileView);

