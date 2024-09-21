import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


import { Home, BookDetail, Login, BookReader } from "../screens/";

import Search from '../screens/Search/Search'

import Tabs from "../navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createNativeStackNavigator();

export function Routes() {
    return(
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen 
                name="Home" 
                component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" 
                component={BookDetail} 
                options={{ headerShown: false }} />

                <Stack.Screen name="BookReader" 
                component={BookReader} 
                options={{ headerShown: false }} />

                 <Stack.Screen name="Login" 
                component={Login} 
                options={{ headerShown: false }} />

                <Stack.Screen name="Search" 
                component={Search}  />



            </Stack.Navigator>
    )
}