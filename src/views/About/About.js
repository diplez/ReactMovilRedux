import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,   
         Platform, 
         Image,      
         BackHandler,
         ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LOGO_GENUS } from './../../constants/images'
import styleAbout from "./style";
import { Button } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements'

class AboutView extends React.Component {

    constructor(props) {
    	super(props)           
    }

    static navigationOptions = {
      title: 'Acerca de ..',
    };

    render() {                
        return (          
          <ScrollView>
            <View style={styleAbout.containerView}>
              <Image
                  style={styleAbout.image}
                  resizeMode={'contain'}                     
                  source={LOGO_GENUS}
              />
              <Text>
                Genus Plataforma Academica
                {'\n'}{'\n'}{'\n'}
              </Text>
              <Text style={styleAbout.textbody}>
                GENUS es tu asistente académico que permite {'\n'}
                la interacción y el fortalecimiento de la comunicación{'\n'}
                entre todos los mienbros de la comunidad educativa {'\n'}
                (institución, estudiantes y padres de familia).
                {'\n'}{'\n'}
                Tienes alguna duda, comentario o sugerencia ?{'\n'}
                !Escribenos a soporte@genusacademico.com.
                {'\n\n'}
                Tambien puedes revisar nuestra sección de Ayuda.
                {'\n\n'}
              </Text>
              <Button
                icon={{ name: 'help'}}
                backgroundColor='#81009C'
                title='Ayuda'
                onPress={()=>{}}
                />
              <Text style={styleAbout.textbody}>{'\n\n'}
                Mantente Informado con las últimas noticias de GENUS{'\n'}
                en nuestras redes sociales.{'\n\n'}
              </Text>
              <View style={styleAbout.containerSocialIcons}>
              <SocialIcon
                type='twitter'
              />
              <SocialIcon                
                type='facebook'
              />
              </View>
              <Text style={styleAbout.textFooter}>
                Estadiscas GENUS{'\n\n\n\n'}
              </Text>
            </View>
          </ScrollView>          
        )
    }
}

function mapStateToProps(state) {    
    return {        
        //sessionData: state.sessionStore.data,
    }
}

export default connect(mapStateToProps, null)(AboutView);