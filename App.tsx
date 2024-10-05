import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

import { useFonts } from '@expo-google-fonts/roboto';
import { Routes } from './src/routes/routes';
import { PaperProvider } from 'react-native-paper';


const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
  });
  
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

    return (
      <PaperProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        </PaperProvider>
      
        );
}

export default App;