import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Settings} from "./Components/Settings";
import {HomeScreen} from "./Components/HomeScreen";


export default function App() {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Photo's list" component={HomeScreen}/>
                <Drawer.Screen name="Setting" component={Settings}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

