import { StyleSheet } from 'react-native';

import { colors } from '@utils';

export const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: colors.lightGray,
		borderRadius: 3,
		paddingVertical: 8,
		paddingHorizontal: 10,
	},
	errorMessage: {
		color: colors.danger,
	},
	errorBorder: {
		borderColor: colors.danger,
	},
});
