import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/UserScreens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/UserScreens/ProfileScreen/ProfileScreen';
import FavProfileScreen from '../screens/UserScreens/FavProfileScreen/FavProfileScreen';

const Stack = createNativeStackNavigator()

const UserNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="FavProfileScreen" component={FavProfileScreen} />
        </Stack.Navigator>
    )
}

export default UserNavigator