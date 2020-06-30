//import { createStackNavigator } from 'react-navigation';
import LoginView from './../views/Login/Login';
import DrawerRoutes from './drawerRoutes'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

const Stack = createStackNavigator();

function Navigation() {    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen
                    name="login"
                    component={LoginView}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="home"
                    component={DrawerRoutes}
                    options={{
                        headerShown: false,
                        gesturesEnabled: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
