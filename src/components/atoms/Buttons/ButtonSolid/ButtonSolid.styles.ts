import { StyleSheet } from 'react-native';

import { colors } from '@utils';

export const styles = StyleSheet.create({
	button: {
		borderRadius: 4,
		borderWidth: 1,
		paddingVertical: 14,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
	},
	primary: {
		backgroundColor: colors.primary,
		borderColor: colors.primary,
	},
	title_primary: {
		color: colors.secondary,
	},
	secondary: {
		backgroundColor: colors.secondary,
		borderColor: colors.secondary,
	},
	title_secondary: {
		color: 'white',
	},
	third: {
		backgroundColor: colors.lightGray,
		borderColor: colors.lightGray,
	},
	title_third: {
		color: colors.secondary,
	},
	danger: {
		backgroundColor: colors.danger,
		borderColor: colors.danger,
	},
	title_danger: {
		color: 'white',
	},
});
