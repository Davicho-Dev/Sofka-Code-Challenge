import { StyleSheet } from 'react-native';

import { colors } from '@utils';

export const styles = StyleSheet.create({
	wrapper: {
		width: 20,
		height: 18,
		position: 'relative',
	},
	noteBack: {
		height: 12,
		width: 16,
		marginLeft: 'auto',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: colors.secondary,
	},
	noteFront: {
		height: 12,
		width: 16,
		bottom: 0,
		marginRight: 'auto',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: colors.secondary,
		backgroundColor: 'white',
		position: 'absolute',
	},
	noteCircle: {
		position: 'absolute',
		backgroundColor: colors.secondary,
		borderRadius: 2.5,
		bottom: 3.5,
		height: 5,
		left: 6,
		width: 5,
	},
});
