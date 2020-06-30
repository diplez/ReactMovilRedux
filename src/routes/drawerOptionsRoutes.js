import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from './../views/Profile/Profile';
import AgendaView from './../views/Agenda/Agenda';
import ScheduleView from './../views/Schedule/Schedule';
import ItineraryView from './../views/Itinerary/Itinerary';
import AnnouncementsView from './../views/Announcements/Announcements';
import CircularView from './../views/Circular/Circular';
import AboutView from './../views/About/About';
import ReportView from './../views/Report/Report';
import CodeCoexistView from './../views/CodeCoexist/CodeCoexist';
import AgendaInstitutionalView from './../views/AgendaInstitutional/AgendaInstitutional';
import React, { Component } from 'react';
import TabScreens from './tabRoutes.js';
import HeaderLeftButton from './../components/_generic/HeaderLeftButton/HeaderLeftButton';
import { useNavigation } from '@react-navigation/native';


/**
 * Configuracion global de menu (Estilos)
 */
const screenOptionsItemMenu={
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#f4511e' },
  headerTitleStyle:{
    textAlign: "center",
    flex: 1
  }
};

/**
*  Rutas de home o linea de tiempo
**/
const StackHome = createStackNavigator();
function HomeRoutes() {  
  const navigation = useNavigation();
  return (
    <StackHome.Navigator screenOptions={screenOptionsItemMenu}>
      <StackHome.Screen
        name="home"
        component={TabScreens}
        options={{
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackHome.Navigator>
  )
}
 
/**
*  RUTAS DE PERFIL DE USUARIO
**/
const StackProfile = createStackNavigator();
function ProfileRoutes() {
  const navigation = useNavigation();
  return (
    <StackProfile.Navigator screenOptions={screenOptionsItemMenu}>
      <StackProfile.Screen
        name="profile"
        component={ProfileView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackProfile.Navigator>
  )
}

/**
*  RUTAS DE AGENDA
**/
const StackAgenda = createStackNavigator();
function AgendaRoutes() {
  const navigation = useNavigation();
  return (
    <StackAgenda.Navigator screenOptions={screenOptionsItemMenu}>
      <StackAgenda.Screen
        name="agenda"
        component={AgendaView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackAgenda.Navigator>
  )
}

/**
*  RUTAS DE HORARIO
**/
const StackSchedule = createStackNavigator();
function ScheduleRoutes() {
  const navigation = useNavigation();
  return (
    <StackSchedule.Navigator screenOptions={screenOptionsItemMenu}>
      <StackSchedule.Screen
        name="schedule"
        component={ScheduleView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackSchedule.Navigator>
  )
}

/**
*  RUTAS DE ITINERARIO ESTUDIANTIL
**/
const StackItinerary = createStackNavigator();
function ItineraryRoutes() {
  const navigation = useNavigation();
  return (
    <StackItinerary.Navigator screenOptions={screenOptionsItemMenu}>
      <StackItinerary.Screen
        name="itinerary"
        component={ItineraryView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackItinerary.Navigator>
  )
}

/**
*  RUTAS DE AGENDA INSTITUCIONAL
**/
const StackAgendaInstitutional = createStackNavigator();
function AgendaInstitutionalRoutes() {
  const navigation = useNavigation();
  return (
    <StackAgendaInstitutional.Navigator screenOptions={screenOptionsItemMenu}>
      <StackAgendaInstitutional.Screen
        name="agendaInstitutional"
        component={AgendaInstitutionalView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackAgendaInstitutional.Navigator>
  )
}

/**
*  RUTAS DE AVISOS
**/
const StackAnnouncements = createStackNavigator();
function AnnouncementsRoutes() {
  const navigation = useNavigation();
  return (
    <StackAnnouncements.Navigator screenOptions={screenOptionsItemMenu}>
      <StackAnnouncements.Screen
        name="announcements"
        component={AnnouncementsView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackAnnouncements.Navigator>
  )
}

/**
*  RUTAS DE CIRCULARES
**/
const StackCircular = createStackNavigator();
function CircularRoutes() {
  const navigation = useNavigation();
  return (
    <StackCircular.Navigator screenOptions={screenOptionsItemMenu}>
      <StackCircular.Screen
        name="circular"
        component={CircularView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackCircular.Navigator>
  )
}

/**
*  RUTAS DE REPORTES
**/
const StackReport = createStackNavigator();
function ReportRoutes() {
  const navigation = useNavigation();
  return (
    <StackReport.Navigator screenOptions={screenOptionsItemMenu}>
      <StackReport.Screen
        name="report"
        component={ReportView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackReport.Navigator>
  )
}

/**
*  RUTAS DE CODIGO DE CONVIVENCIA
**/
const StackCodeCoexist = createStackNavigator();
function CodeCoexistRoutes() {
  const navigation = useNavigation();
  return (
    <StackCodeCoexist.Navigator screenOptions={screenOptionsItemMenu}>
      <StackCodeCoexist.Screen
        name="codeCoexist"
        component={CodeCoexistView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackCodeCoexist.Navigator>
  )
}

/**
*  RUTAS DE ACERCA DE .. 
**/
const StackAbout = createStackNavigator();
function AboutRoutes() {
  const navigation = useNavigation();
  return (
    <StackAbout.Navigator screenOptions={screenOptionsItemMenu}>
      <StackAbout.Screen
        name="about"
        component={AboutView}
        options={{
          gesturesEnabled: false,
          headerLeft: (props) => (
            <HeaderLeftButton navigation={navigation}/>
          )
        }}
      />
    </StackAbout.Navigator>
  )
}

export {
  AboutRoutes,
  AgendaRoutes,
  AgendaInstitutionalRoutes,
  AnnouncementsRoutes,
  CircularRoutes,
  CodeCoexistRoutes,
  HomeRoutes,
  ItineraryRoutes,
  ScheduleRoutes,
  ProfileRoutes,
  ReportRoutes
};
