import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react"
import { CartScreen } from "../screens/CartScreen";
import { HomeScreen } from "../screens/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import HomeStack from "./HomeStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
                component={HomeStack}
                name="Home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={19} color={color} />
                    ),
                }}
            />
            <Tab.Screen
            component={HomeScreen}
            name="profile"
            options={{
                tabBarIcon: ({ color }) => (
                    <Entypo name="user" size={19} color={color} />
                ),
            }}
            />

            <Tab.Screen
            component={CartStack} 
            name="shoppingCart"
            options={{
                tabBarIcon: ({ color }) => (
                    <Entypo name="shopping-cart" size={19} color={color} />
                ),
            }}
            />

            <Tab.Screen 
            component={HomeScreen} 
            name="more"
            options={{
                tabBarIcon: ({ color }) => (
                    <Entypo name="menu" size={19} color={color} />
                ),
            }}
            />

        </ Tab.Navigator>
    )
}

export default BottomTabNav;
