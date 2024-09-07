import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes/routes';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      
        );
}

export default App;