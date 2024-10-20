import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home, BookDetail, Login, BookReader } from "../screens/";

import Search from '../screens/Search/Search'

import Tabs from "../navigation/tabs";


const Stack = createStackNavigator();

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
                component={Tabs}
                 />

                {/* Screens */}
                <Stack.Screen name="BookDetail" 
                component={BookDetail} 
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }}
                
                />

                <Stack.Screen name="BookReader" 
                component={BookReader} 
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />

                 <Stack.Screen name="Login" 
                component={Login} 
                options={{ 
                    headerShown: false,
                    presentation: 'modal',
                  
                }} />

                <Stack.Screen name="Search" 
                component={Search}
                />
            </Stack.Navigator>
    )
}