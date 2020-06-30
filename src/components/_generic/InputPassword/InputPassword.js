import React from 'react';
import { TouchableOpacity,View,TextInput,Text,Image } from 'react-native';
import styleInputPassword from "./style"
import { SHOW_PASSWORD, HIDE_PASSWORD } from './../../../constants/images'

export default class InputPassword extends React.Component {    

  constructor(props) {
     super(props)
     this.state = {
         hiddenText:true,
         textbutton:SHOW_PASSWORD
     }
     this.showHideText = this.showHideText.bind(this)
  }

   showHideText(){
      this.setState({
         hiddenText:this.state.hiddenText?false:true ,
         textbutton: this.state.hiddenText?HIDE_PASSWORD:SHOW_PASSWORD
      })      
   }

   render() {
      return (
            <View style={styleInputPassword.container}>               
               <View style={styleInputPassword.box_input}>
                  <TextInput
                     underlineColorAndroid="transparent"
                     style={[this.props.styleInput,styleInputPassword.input]}
                     secureTextEntry={this.state.hiddenText}
                     placeholder={this.props.placeholderInput}
                     onChangeText={(text) => this.props.eventText(text)}
                    />
               </View>
               <TouchableOpacity style={[styleInputPassword.box_image]} onPress={this.showHideText}>
               <View style={[styleInputPassword.box_image]}>                  
                    <Image
                        source={this.state.textbutton}
                    />                  
               </View>
               </TouchableOpacity>                    
         </View>
        )
   }
}
