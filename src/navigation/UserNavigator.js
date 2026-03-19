import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Image } from 'react-native';

import HomeScreen from '../screens/UserScreens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/UserScreens/ProfileScreen/ProfileScreen';
import FavProfileScreen from '../screens/UserScreens/FavProfileScreen/FavProfileScreen';
import colors from '../constants/colors';
import { moderateScale, verticalScale } from '../utils/responsive';
import { bottomTabHerat, bottomTabHome } from "../constants/images"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavProfileScreen" component={FavProfileScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const TabIcon = ({ route, focused }) => {
  const getIcon = () => {
    if (route.name == 'Home') {
      return bottomTabHome
    } else if (route.name == 'Favorites') {
      return bottomTabHerat
    }
  };

  return (
    <View style={styles.iconContainer}>
      <Image source={getIcon()} resizeMode='contain' tintColor={focused ? colors.theme : '#000'} style={styles.icon} />
    </View>
  );
};

const UserNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabIcon route={route} focused={focused} />,
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabel: route.name,
        tabBarLabelStyle: styles.tabLabel,
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorites" component={FavoritesStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: verticalScale(25),
    width: verticalScale(25)
  },
  tabLabel: {
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
});

export default UserNavigator;