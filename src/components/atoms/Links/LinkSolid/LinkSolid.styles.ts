import { StyleSheet } from 'react-native';

import { colors } from '@utils';

export const styles = StyleSheet.create({
	link: {
		borderRadius: 4,
		borderWidth: 1,
		fontWeight: 'bold',
		paddingVertical: 14,
		textAlign: 'center',
	},
	primary: {
		backgroundColor: colors.primary,
		borderColor: colors.primary,
		color: colors.secondary,
	},
	secondary: {
		backgroundColor: colors.secondary,
		borderColor: colors.secondary,
		color: 'white',
	},
	third: {
		backgroundColor: colors.lightGray,
		borderColor: colors.lightGray,
		color: colors.secondary,
	},
	danger: {
		backgroundColor: colors.danger,
		borderColor: colors.danger,
		color: 'white',
	},
});
