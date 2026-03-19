import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    isOnline: true,
    isSlow: false,
  });

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const isOnline = state.isConnected && state.isInternetReachable;
      const isSlow = state.type == 'cellular' && state.details?.cellularGeneration == '2g';
      
      setNetworkStatus({
        isOnline: !!isOnline,
        isSlow: isSlow || false,
      });
    });

    return () => unsubscribe();
  }, []);

  return networkStatus;
};