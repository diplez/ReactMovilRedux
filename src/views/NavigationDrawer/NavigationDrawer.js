import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styleDrawer from './style';
import {Alert,
        Image,        
        Picker,
        ScrollView, 
        Text,
        View,
        TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncStorage } from "react-native";
import { ABOUT,
         ABOUTOD,
         AGENDA,
         AGENDAOD,
         AGENDA_INSTITUTIONAL,
         AGENDA_INSTITUTIONALOD,
         ANNOUNCEMENTS,
         ANNOUNCEMENTSOD,
         CIRCULAR,
         CIRCULAROD,
         CODECOEXIST,
         CODECOEXISTOD,
         HOME,        
         HORARIO,
         HORARIOOD, 
         ITINERARY,
         ITINERARYOD,
         LINETIMEOD,
         LOGIN,
         PROFILEOD,
         PROFILE,
         URL_LOJASOFT,
         REPORT,
         REPORTOD } from './../../constants/app'
import { BTN_ACEPTAR,
         BTN_CANCELAR,
         TITLE_ALERT_ACS,
         ERROR_DESCONOCIDO,
         ITEM_AVISOS,
         ITEM_ACERCA_DE,
         ITEM_AGENDA,
         ITEM_CIRCULARES,
         ITEM_COD_CONVIVENCIA,
         ITEM_CERRAR,
         ITEM_PERFIL,
         ITEM_LINEA_TIEMPO,
         ITEM_ITINERARIO,
         ITEM_AGENDA_INST,
         ITEM_REPORTE,
         ITEM_HORARIO_CLASES,
         SUB_TITLE,
         SUB_TITLE_ALERT_ACS,
         TITLE_SUBMENU } from './../../constants/view'
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginClose } from './../../actions/sessionAction';
import LoadingModal from './../../components/_generic/LoadingModal/LoadingModal';
import ItemMenuDrawer from './../../components/_generic/ItemMenuDrawer/ItemMenuDrawer';
import { openURLWeb } from './../../utils/extras';
import { CommonActions } from '@react-navigation/native';

class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      islogged : true,
      isLoading:false,
      color:'#5d438f',
      sizeIcon:20
    }
    this.closeSession = this.closeSession.bind(this)
  }

  componentDidMount() {
    //console.log(this.props.sessionData.info)
  }

  componentWillUnmount() {
    !this.state.islogged&&this.props.loginClose();
  }

  closeSession(){
    Alert.alert(
        TITLE_ALERT_ACS,
        SUB_TITLE_ALERT_ACS, [{
            text: BTN_CANCELAR,
            onPress: () => console.log('Operacion cancelada'),
            style: 'cancel'
        }, {
            text: BTN_ACEPTAR,
            onPress: () => this.cleanSyncStore()
        }, ], {
            cancelable: false
        }
     )    
  }

  cleanSyncStore = async () => {    
      await AsyncStorage.clear()                  
      this.props.navigation.navigate(LOGIN);    
      this.setState({islogged:false})
  };

  navigateToScreen = (route,baseRoute) => () => {  
    console.log(this.props.progress + 'Estado del  cajon 1 abierto 0 cerrado. ');
    this.props.navigation.closeDrawer();
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {
          user: 'No-necesary',
        },
      })
    );
    this.setState({isLoading:false})      
    /**setTimeout(()=>{      
      //CommonActions.dispatch(navigateAction);
      this.setState({isLoading:false})      
    },300)**/
  }

  render () {
    console.log('NAVIGATION_DRAWER '+JSON.stringify(this.props.state.routeNames[this.props.state.index]));
    console.log(this.props.state.routeNames[this.props.state.index]===ITINERARYOD);
    return (
      <View style={styleDrawer.container}>
        <LoadingModal visible={this.state.isLoading}/>
        <ScrollView>
          <View style={styleDrawer.header}>
            <View style={styleDrawer.image}>
              <Image                
                  style={{width: 66, height: 66}}
                  source={{uri:this.props.sessionData.info.avatar}}
              />
             </View> 
            <Text style={styleDrawer.sectionHeadingStyle}>
              {
                this.props.sessionData.info.name +
                " "+
                this.props.sessionData.info.lastname
              }
            </Text>            
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styleDrawer.labelRol}>            
                {this.props.rol}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <ItemMenuDrawer
              icon='book'
              colorIcon={this.state.color}
              itemName={ITEM_ITINERARIO}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(ITINERARYOD,ITINERARY)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={ITINERARYOD}
            />

            <ItemMenuDrawer
              icon='table'
              colorIcon={this.state.color}
              itemName={ITEM_HORARIO_CLASES}
              sizeIcon={this.state.sizeIcon}              
              action={this.navigateToScreen(HORARIOOD,HORARIO)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={HORARIOOD}
            />

            <ItemMenuDrawer
              icon='calendar-plus-o'
              colorIcon={this.state.color}
              itemName={ITEM_AGENDA}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(AGENDAOD,AGENDA)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={AGENDAOD}
            />

            <ItemMenuDrawer
              icon='clock-o'
              colorIcon={this.state.color}
              itemName={ITEM_LINEA_TIEMPO}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(LINETIMEOD,HOME)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={LINETIMEOD}
            />

            <ItemMenuDrawer
              icon='clipboard'
              colorIcon={this.state.color}
              itemName={ITEM_AGENDA_INST}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(AGENDA_INSTITUTIONALOD,AGENDA_INSTITUTIONAL)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={AGENDA_INSTITUTIONALOD}
            />

            <ItemMenuDrawer
              icon='pencil-square-o'
              colorIcon={this.state.color}
              itemName={ITEM_AVISOS}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(ANNOUNCEMENTSOD,ANNOUNCEMENTS)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={ANNOUNCEMENTSOD}
            />

            <ItemMenuDrawer
              icon='file-text-o'
              colorIcon={this.state.color}
              itemName={ITEM_CIRCULARES}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(CIRCULAROD,CIRCULAR)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={CIRCULAROD}
            />

            <ItemMenuDrawer
              icon='mortar-board'
              colorIcon={this.state.color}
              itemName={ITEM_COD_CONVIVENCIA}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(CODECOEXISTOD,CODECOEXIST)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={CODECOEXISTOD}
            />

            <ItemMenuDrawer
              icon='line-chart'
              colorIcon={this.state.color}
              itemName={ITEM_REPORTE}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(REPORTOD,REPORT)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={REPORTOD}
            />

            <Text style={styleDrawer.subHeadingStyle}>
              {TITLE_SUBMENU}
            </Text>

            <ItemMenuDrawer
              icon='user'
              colorIcon={this.state.color}
              itemName={ITEM_PERFIL}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(PROFILEOD,PROFILE)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={PROFILEOD}
            />

            <ItemMenuDrawer
              icon='info-circle'
              colorIcon={this.state.color}
              itemName={ITEM_ACERCA_DE}
              sizeIcon={this.state.sizeIcon}
              action={this.navigateToScreen(ABOUTOD,ABOUT)}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={ABOUTOD}
            />

            <ItemMenuDrawer
              icon='window-close-o'
              colorIcon={this.state.color}
              itemName={ITEM_CERRAR}
              sizeIcon={this.state.sizeIcon}
              action={this.closeSession}
              itemActive={this.props.state.routeNames[this.props.state.index]}
              itemValue={''}
            />
          </View>
        </ScrollView>
        <View style={styleDrawer.footerContainer}>
          <TouchableOpacity onPress={()=>{openURLWeb(URL_LOJASOFT)}}>
          <Text>
            <Icon name="copyright" 
              color={this.state.colorIcon} 
              size={this.state.sizeIcon} />
            {'    '+SUB_TITLE}
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

function mapStateToProps(state) {    
    return {        
        sessionData: state.sessionStore.data,
        rol: state.sessionStore.rol
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginClose}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);