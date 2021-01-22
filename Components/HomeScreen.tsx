import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Settings} from "./Settings";
import {PhotosList} from "./PhotoList"

export const HomeScreen: React.FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: () => {
                    let iconName;
                    if (route.name === 'PhotoList') {
                        iconName = "list-ul";
                    } else if (route.name === 'Settings') {
                        iconName = "cogs";
                    }
                    // @ts-ignore
                    return <FontAwesome5 name={iconName}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="PhotoList" component={PhotosList}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}

