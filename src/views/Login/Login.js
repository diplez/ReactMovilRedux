import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userloginAutenticate ,selectRolUser} from './../../actions/sessionAction';
import styleLogin from "./style";
import Login from './../../components/Login/Login'
import { HOME } from './../../constants/app'
import { TITLE_APP } from './../../constants/view'
import { View, Image, Text,KeyboardAvoidingView, Platform, } from 'react-native';
import { getSessionData }  from './../../utils/sessionData';

class LoginView extends React.Component {    

	constructor(props) {
        super(props)
    }

    componentDidMount(){        
        console.log(this.props.sesionStore.isLogged?"true":"false")
        this.props.sesionStore.isLogged&&this.props.navigation.navigate(HOME);
        //this.props.sesionStore.sessionData.username&&this.props.navigation.navigate(HOME);
        /**
        getSessionData().then((data)=>{
            data!==null?this.props.navigation.navigate(HOME):''
        })**/
    }    

    render() {
        return (
            <View style={styleLogin.box}>
                <KeyboardAvoidingView           
                    /*behavior="padding" */
                    behavior={Platform.OS === 'ios' ? "padding" : null}
                    enabled 
                    style={styleLogin.wrapper}
                >            
                    <View style={[styleLogin.box, styleLogin.box1]}>
                        <Image
                            resizeMode={'contain'} 
                            style={styleLogin.image}
                            source={require('./../../assets/logoGenus.png')}
                        />
                        <Text
                            style={styleLogin.textApp}
                            >
                            {TITLE_APP}
                        </Text>
                    </View>
                    <View style={[styleLogin.box, styleLogin.box2]}>
                    	<Login 
                            sesionStore={this.props.sesionStore} 
                            userloginAutenticate={this.props.userloginAutenticate}
                            navigation={this.props.navigation}
                            selectRol={this.props.selectRolUser}/>                    
                    </View>                    
                </KeyboardAvoidingView>            
                <Text style={styleLogin.textCopyright}>&copy; Powered by LojaSoft</Text>
            </View>
        );
    }

}

function mapStateToProps(state) {    	
    return {
            sesionStore : {
                sessionData: state.sessionStore.data,
                sessionError: state.sessionStore.error,
                loadingState: state.sessionStore.loading,
                isLogged: state.sessionStore.isLogged,
                rol: state.sessionStore.rol
            }
        }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userloginAutenticate,selectRolUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
