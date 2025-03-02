import { StyleSheet } from 'react-native';

import { colors } from '@utils';

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 8,
	},
	heading: {
		textTransform: 'uppercase',
		fontSize: 24,
		color: colors.secondary,
		fontFamily: 'inter_600',
	},
});
