import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { moderateScale } from '../../utils/responsive'
import colors from '../../constants/colors'

const CustomSkeleton = ({ style }) => {

  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    return () => animation.stop();
  }, []);

  return (
    <Animated.View
      style={[
        styles.skeleton,
        style,
        { opacity, backgroundColor: colors.lightGrey },
      ]}
    />
  );
};

export default CustomSkeleton

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: moderateScale(4),
  },
});