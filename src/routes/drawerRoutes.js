import NavigationDrawer from './../views/NavigationDrawer/NavigationDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
  AboutRoutes,
  CircularRoutes,
  CodeCoexistRoutes,
  HomeRoutes,
  ItineraryRoutes,
  ProfileRoutes,
  AgendaRoutes,
  AgendaInstitutionalRoutes,
  AnnouncementsRoutes,
  ScheduleRoutes,
  ReportRoutes
} from './drawerOptionsRoutes'
import { WIDTH } from './../utils/dimension';
import * as React from 'react';

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {  
  return (
    <Drawer.Navigator
      drawerContent={(props) => <NavigationDrawer {...props}/>}            
      drawerContentOptions={{
        activeBackgroundColor: 'red',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1
        }
      }}
      drawerStyle={{
        width: WIDTH - 70,
      }}>
      <Drawer.Screen name="lineTimeOD" component={HomeRoutes} />
      <Drawer.Screen name="profileOD" component={ProfileRoutes} />
      <Drawer.Screen name="agendaOD" component={AgendaRoutes} />
      <Drawer.Screen name="scheduleOD" component={ScheduleRoutes} />
      <Drawer.Screen name="itineraryOD" component={ItineraryRoutes} />
      <Drawer.Screen name="agendaInstitutionalOD" component={AgendaInstitutionalRoutes} />
      <Drawer.Screen name="announcementsOD" component={AnnouncementsRoutes} />
      <Drawer.Screen name="circularOD" component={CircularRoutes} />
      <Drawer.Screen name="reportOD" component={ReportRoutes} />
      <Drawer.Screen name="codeCoexistOD" component={CodeCoexistRoutes} />
      <Drawer.Screen name="aboutOD" component={AboutRoutes} />      
    </Drawer.Navigator>
  );
}