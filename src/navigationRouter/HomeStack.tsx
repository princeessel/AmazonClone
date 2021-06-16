import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react"
import { Search } from "../components/Search";
import { HomeScreen } from "../screens/HomeScreen";
import { ProductScreen } from "../screens/ProductScreen";


const Stack = createStackNavigator();

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            }}
        >
            <Stack.Screen name="HomeScreen" options={{ title: 'Home' }}>
                {() => <HomeScreen searchValue={searchValue} />}
            </Stack.Screen>

            <Stack.Screen component={ProductScreen} name="ProductDetails" />
        </Stack.Navigator>
    )
}

export default HomeStack;
