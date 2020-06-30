import React from 'react';
import { store, persistor } from './src/stores/store';
import {Provider} from 'react-redux';
import Main from './src/main';
import { PersistGate } from 'redux-persist/integration/react';
import { View, ActivityIndicator } from 'react-native';
import GlobalStyles from './src/styles/globalStyles';


export default class App extends React.Component {

  renderLoading = () => (
    <View style={GlobalStyles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );

  render() {
    return (
      <Provider store={store}>
      	<PersistGate persistor={persistor} loading={this.renderLoading()}>
      		<Main/>  
      	</PersistGate>    	
      </Provider>
    );
  }
}

