import { useEffect } from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

import { styles } from './Error.styles';

export const IcError = () => {
	const scale = useSharedValue(1);

	useEffect(() => {
		scale.value = withRepeat(withTiming(1, { duration: 500 }), -1, true);
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<Animated.View style={[styles.iconContainer, animatedStyle]}>
			<FontAwesome5 name='times-circle' size={40} color='#d50909' />
		</Animated.View>
	);
};
