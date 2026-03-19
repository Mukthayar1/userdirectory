import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer onReady={() => setIsLoading(false)}>
      {isAuthenticated ? <UserNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;