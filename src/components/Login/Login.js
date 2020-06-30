import React from 'react';
import styleLogin from "./style";
import InputPassword from './../_generic/InputPassword/InputPassword';
import LoadingModal from './../_generic/LoadingModal/LoadingModal';
import { encryptMD5 } from './../../utils/encrypt';
import User from './../../models/User'
import {
         Alert,         
         Button,
         Keyboard,                  
         Text,
         TextInput,         
         View 
        } from 'react-native';
import  {   
        BUTTON_AUTENTICATE,
        CAMPOS_VACIOS,
        ERROR_404,
        ERROR_500,  
        ERROR_DESCONOCIDO,      
        PH_PASSWORD,
        PH_USERNAME, 
        TITLE_ACTION_ROL       
        } from './../../constants/view'
//import ActionSheet from 'react-native-actionsheet'
import  { HOME } from './../../constants/app'

export default class Login extends React.Component {    

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            visible: this.props.sesionStore.loadingState,
            roles: []
        }        
        this.login = this.login.bind(this)
        this.viewMenssagesStatus = this.viewMenssagesStatus.bind(this)        
        this.textPassword = this.textPassword.bind(this)
    }        

    login() {                    
        user = new User(this.state.username.trim(),encryptMD5(this.state.password.trim()))
        if(this.state.username!==""&&this.state.password!==""){
            this.setState({visible:true})
            this.props.userloginAutenticate(user).then(
                () => {
                    console.log(user);
                    if(this.props.sesionStore.sessionError!==""){
                        this.viewMenssagesStatus(this.props.sesionStore.sessionError)
                    }else{
                        var rolesServer = this.props.sesionStore.sessionData.info.roles.map((rol)=>rol.name)                        
                        this.setState({
                            visible:false,
                            roles: rolesServer
                        })
                        this.props.sesionStore.sessionData.info.roles.length===1
                        ?this.props.navigation.navigate(HOME)
                        :this.props.navigation.navigate(HOME) //this.ActionSheet.show()
                    }
                    
                }
            ).catch((error)=> console.log('EROR EN PETICION '+error));
        }else{            
            setTimeout(()=>{this.viewMenssagesStatus("");},100)
        }
    }

    textPassword(password){
        this.setState({
            password: password
        })
    }

    viewMenssagesStatus(error){ 
        var message = ''
        if(error===''){
            message = CAMPOS_VACIOS
        }else{
            if (error.response){
                switch(error.response.status){
                    case 404:
                        message = ERROR_404;
                        break;    
                    case 500:
                        message = ERROR_500;
                        break;
                    case "":
                        message = ERROR_DESCONOCIDO;
                        break;
                }
            }else{
                message = error.message;
            }
        }        
        Alert.alert(
          'Alerta',
          message,
          [           
            {text: 'Aceptar', onPress: () => {console.log('Aceptado');this.setState({visible:this.props.sesionStore.loadingState})}},
          ],
          { cancelable: false }
        )
    }    

    selectRolUser(index){        
        this.props.selectRol(this.state.roles[index])
        this.props.navigation.navigate(HOME)
    }

    render() {
        return (
            <View>                            
                {/**<ActionSheet
                  ref={o => this.ActionSheet = o}
                  title={TITLE_ACTION_ROL}
                  options={this.state.roles}
                  //cancelButtonIndex={2}
                  //destructiveButtonIndex={1}
                  onPress={(index) => {this.selectRolUser(index)}}
                />**/}
                <LoadingModal visible={this.state.visible}/>
                <TextInput
                    underlineColorAndroid="transparent"
                    style={styleLogin.input_login}
                    placeholder={PH_USERNAME}
                    clearButtonMode='always'
                    keyboardType='numeric'
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />                                
                <InputPassword 
                    styleInput={styleLogin.input_login}
                    placeholderInput={PH_PASSWORD}
                    eventText={this.textPassword}/>
                <Button
                    onPress={this.login}
                    title={BUTTON_AUTENTICATE+""}
                    color="#841584"
                    accessibilityLabel=""
                />                
            </View>
        );
    }
}

