import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";



import Login from "../screens/Login/Login";
import Search from '../screens/Search/Search'


import { icons, COLORS } from "../constants";
import Library from "../screens/Library/Library";

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: "10%",
                    backgroundColor: COLORS.black,
                    borderTopColor: COLORS.primary,
                },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.purple : COLORS.lightGray4;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case "Library":
                            return (
                                
                               <Ionicons name="library-outline" size={30} 
                               style={{
                                color: tintColor}
                            } />
                            )

                        case "Notification":
                            return (
                                <Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Setting":
                            return (
                                <Image
                                    source={icons.menu_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Search}
            />
            <Tab.Screen
                name="Library"
                component={Library}
            />


            <Tab.Screen
                name="Setting"
                component={Login}
            />
        </Tab.Navigator>
    )
}

export default Tabs;