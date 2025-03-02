import { StyleSheet } from 'react-native';

import { colors } from '@utils';

export const styles = StyleSheet.create({
	label: {
		fontWeight: 'bold',
		marginBottom: 6,
	},
	errorMessage: {
		color: colors.danger,
		fontSize: 12,
		fontWeight: 'bold',
		marginTop: 6,
	},
});
