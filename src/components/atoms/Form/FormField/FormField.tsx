import type { FC, ReactNode } from 'react';

import { View, Text } from 'react-native';

import type { IFormFieldProps } from './FormField.interfaces';

import { styles } from './FormField.styles';

export const FormField: FC<IFormFieldProps> = ({ label, errorMessage, hasError, render }) => {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			{render(hasError)}
			{hasError && errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
		</View>
	);
};
