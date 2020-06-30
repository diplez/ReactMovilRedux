import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { StatusBar, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import GlobalStyles from './styles/globalStyles'
import Navigation from './routes/routes'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class Main extends React.Component {
  render() {
    //(/**behavior="padding" **/) Da error al colocarlo, android entiende que el valor pading esta por defecto
    return (
      <View style={[GlobalStyles.container]}>
        <StatusBar hidden={false} barStyle="light-content" />
        <Navigation />
      </View>
    );
  }
}
