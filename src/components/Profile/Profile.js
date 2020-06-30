import React from 'react';
import { Image,
         StyleSheet,
         Text, 
         View ,
         ScrollView} from 'react-native';
import styleProfile from "./style";
import GlobalStyles from './../../styles/globalStyles'
import {Divider, Button,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends React.Component {

    constructor(props) {
    	super(props)
    }    

    componentDidMount() {
        console.log(this.props.sesionStore.info)
    }

    render() {        
        return (
        	<ScrollView style={styleProfile.box}>
                <View style={[styleProfile.box,styleProfile.heading]}>
                    <View style={styleProfile.heading_left}>
                        <View style={GlobalStyles.image_circle}>
                            <Image                              
                              style={{width: 70, height: 70}}
                              source={{uri:this.props.sesionStore.info.avatar}}
                            />
                        </View>
                    </View>
                    <View style={styleProfile.heading_rigth}>
                        <Button
                        icon={{
                        name: 'camera',
                        size: 20,
                        color: 'white'
                        }}
                        title='Editar'
                        />
                    </View>
                </View>
                <View style={[styleProfile.box,styleProfile.body]}>
                    <FormLabel>Nombre</FormLabel>
                    <FormInput defaultValue={this.props.sesionStore.info.name} />

                    <FormLabel>Apellidos</FormLabel>
                    <FormInput defaultValue={this.props.sesionStore.info.lastname} />

                    <FormLabel>Correo</FormLabel>
                    <FormInput defaultValue={this.props.sesionStore.info.mail} />

                    <FormLabel>Clave</FormLabel>
                    <FormInput placeholder='*******************'/>
                    <FormValidationMessage>{'Dejar en blanco si no desea actualizar campo'}</FormValidationMessage>

                    <Divider style={{ marginTop:10,marginBottom:10,backgroundColor: 'blue' }} />
                    <Button
                        icon={{
                        name: 'save',
                        size: 20,
                        color: 'white'
                        }}
                        backgroundColor='#81009C'
                        title='Actualizar'
                        />
                </View>
        	</ScrollView>
        )
    }
}