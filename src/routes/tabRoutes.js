import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, BottomTabBar } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActivitiesView from './../views/Activities/Activities';
import NoveltyView from './../views/Novelty/Novelty';

const Tab = createMaterialTopTabNavigator();

export default function TabScreens() {
  return (
    <Tab.Navigator
      tabBarPosition='bottom'
      tabBarOptions={{
        
      }}
      >
      <Tab.Screen name="activities" component={ActivitiesView} options={{ tabBarLabel: 'Actividades' }} />
      <Tab.Screen name="novelty" component={NoveltyView} options={{ tabBarLabel: 'Novedades' }} />
    </Tab.Navigator>
  );
}
/**
export default TabScreens = createMaterialTopTabNavigator(
  {
    activities: {
      screen: ActivitiesView,
      navigationOptions: {
        title: 'Actividades'
      }
    },
    novelty: {
      screen: NoveltyView,
      navigationOptions: {
        title: 'Novedades'
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'activities') {
          iconName = 'calendar-plus-o';
        } else if (routeName === 'novelty') {
          iconName = 'calendar-plus-o';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    backgroundColor: 'blue',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      color: 'white',
      style: {
        backgroundColor: 'white',
      },
      tabStyle: {
        height: 80,
      },
      showIcon: true
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
) */