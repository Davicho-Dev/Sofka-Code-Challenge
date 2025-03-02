import { forwardRef } from 'react';

import { Text, Pressable, View } from 'react-native';

import type { IButtonSolidProps } from './ButtonSolid.interfaces';

import { styles } from './ButtonSolid.styles';

export const ButtonSolid = forwardRef<View, IButtonSolidProps>(
	({ children, variant = 'primary', onPress }: IButtonSolidProps, ref) => {
		if (variant === 'secondary') {
			return (
				<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.secondary]} testID='secondart-button'>
					<Text style={[styles.title, styles.title_secondary]}>{children}</Text>
				</Pressable>
			);
		}

		if (variant === 'third') {
			return (
				<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.third]} testID='third-button'>
					<Text style={[styles.title, styles.title_third]}>{children}</Text>
				</Pressable>
			);
		}

		if (variant === 'danger') {
			return (
				<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.danger]} testID='danger-button'>
					<Text style={[styles.title, styles.title_danger]}>{children}</Text>
				</Pressable>
			);
		}

		return (
			<Pressable ref={ref} onPress={onPress} style={[styles.button, styles.primary]} testID='primary-button'>
				<Text style={[styles.title, styles.title_primary]}>{children}</Text>
			</Pressable>
		);
	}
);
