import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from '../QRCodeApp/src/store/store';
import MainScreen from './src/screens/MainScreen';
import QRCodeScreen from './src/screens/QRCodeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Accueil" component={MainScreen} />
          <Stack.Screen name="QRCode" component={QRCodeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
