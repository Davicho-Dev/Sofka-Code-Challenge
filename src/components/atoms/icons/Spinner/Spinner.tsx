import { useEffect, useRef } from 'react';

import { Animated, Easing } from 'react-native';

import { styles } from './Spinner.styles';

export const IcSpinner = () => {
	const rotateValue = useRef(new Animated.Value(0)).current;
	const spinAnimation = Animated.loop(
		Animated.timing(rotateValue, {
			toValue: 1,
			duration: 5000,
			easing: Easing.linear,
			useNativeDriver: true,
		})
	);

	useEffect(() => {
		spinAnimation.start();
		return () => spinAnimation.stop();
	}, [rotateValue]);

	const rotateInterpolation = rotateValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '3600deg'],
	});

	return <Animated.View style={[styles, { transform: [{ rotate: rotateInterpolation }] }]} />;
};
