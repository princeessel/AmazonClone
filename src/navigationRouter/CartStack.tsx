import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react"
import { AddressScreen } from "../screens/AddressScreen";
import { CartScreen } from "../screens/CartScreen";

const Stack = createStackNavigator();

const CartStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen  component={CartScreen} name="cart" options={{title: 'Shopping cart'}} />
                <Stack.Screen  component={AddressScreen} name="AddressScreen" options={{title: 'Address'}} />
            </Stack.Navigator>
    )
}

export default CartStack;
