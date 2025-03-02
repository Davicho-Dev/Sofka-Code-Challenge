import { View, Text } from 'react-native';

import { IcBackNote } from '@atoms';

import { styles } from './Logo.styles';

export const Logo = () => {
	return (
		<View style={styles.wrapper}>
			<IcBackNote />
			<Text style={styles.heading}>Banco</Text>
		</View>
	);
};
