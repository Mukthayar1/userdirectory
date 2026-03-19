import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import UserNavigator from "./UserNavigator";

const AppNavigator = () => {

  return (
    <NavigationContainer>
      {false ? <UserNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator