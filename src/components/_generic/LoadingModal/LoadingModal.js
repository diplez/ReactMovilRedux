import React from 'react';
import {ActivityIndicator,Modal,View } from 'react-native';
import styleModal from "./style"

export default class LoadingModal extends React.Component {    

  constructor(props) {
     super(props)     
  }

  render(){
  	return(
  		<Modal                     
            onRequestClose={()=>console.log("se va a cerrar")}                     
            supportedOrientations={['portrait', 'landscape']}
            visible={this.props.visible}                    
            transparent={true}
            presentationStyle="overFullScreen">                    

            <View style={styleModal.modal} opacity={0.8}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>                    
            
        </Modal> 
  	)
  }

}
